output "swa_api_key" {
  value     = azurerm_static_site.default.api_key
  sensitive = true
}

output "default_host_name" {
  value = azurerm_static_site.default.default_host_name
}