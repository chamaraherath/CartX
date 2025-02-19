# Use the official .NET SDK image to build the app
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

# Set the working directory in the container
WORKDIR /app

# Copy the project files into the container
COPY . .

# Restore the NuGet packages
RUN dotnet restore

# Publish the application to a folder
RUN dotnet publish -c Release -o /app/publish

# Use the official .NET runtime image for the final image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final

# Set the working directory in the final image
WORKDIR /app

# Copy the published application from the build stage
COPY --from=build /app/publish .

# Expose the port the app will run on
EXPOSE 80

# Set the entry point for the container to run the application
ENTRYPOINT ["dotnet", "product-service.dll"]
