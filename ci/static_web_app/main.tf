resource "azurerm_resource_group" "rg" {
  name     = var.resource_group
  location = var.location

  lifecycle {
    prevent_destroy = true # Default is false
  }
}

resource "azurerm_static_site" "default" {
  name                = var.name
  resource_group_name = azurerm_resource_group.rg.name
  location            = var.static_web_app_location
}