using System.Text;
using System.Text.Json;

namespace ProductService.Middleware
{
    public class TelemetryLogMiddleware(ILogger<TelemetryLogMiddleware> logger, RequestDelegate next)
    {
        public async Task Invoke(HttpContext context)
        {
            var requestTelemetry = new
            {
                RequestId = context.TraceIdentifier,
                HttpMethod = context.Request.Method,
                RequestPath = context.Request.Path,
                QueryString = context.Request.QueryString.ToString(),
                RequestBody = await ReadRequestBodyAsync(context)
            };

            logger.LogInformation("Incoming Request: {Telemetry}", JsonSerializer.Serialize(requestTelemetry));
            logger.LogInformation("Request: {0} {1}", context.Request.Method, context.Request.Path);
            await next(context);
        }

        private async Task<string> ReadRequestBodyAsync(HttpContext context)
        {
            if (context.Request.ContentLength == null || context.Request.ContentLength == 0)
                return null;

            context.Request.EnableBuffering();
            using var reader = new StreamReader(context.Request.Body, Encoding.UTF8, leaveOpen: true);
            var body = await reader.ReadToEndAsync();
            context.Request.Body.Position = 0; // Reset stream position
            return body;
        }
    }
}