# Base image for runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

# Build image with SDK
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["product-service.csproj", "./"]
RUN dotnet restore "product-service.csproj"
COPY . .
RUN dotnet build "product-service.csproj" -c Debug -o /app/build

# Publish app
FROM build AS publish
RUN dotnet publish "product-service.csproj" -c Debug -o /app/publish

# Final runtime container (Only for normal execution)
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "product-service.dll"]
