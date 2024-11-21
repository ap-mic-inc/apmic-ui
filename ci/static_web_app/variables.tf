variable "resource_group" {
  type        = string
  description = "Resource group name"
}

variable "name" {
  type        = string
  description = "Resource name"
}

variable "location" {
  type        = string
  description = "Location of the resource."
}

variable "static_web_app_location" {
  type        = string
  description = "Location of the static web app."
}