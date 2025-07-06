package routes

import (
    "github.com/gin-gonic/gin"
    "goshorty/handlers"
)

func SetupRoutes(r *gin.Engine) {
    r.POST("/api/shorten", handlers.ShortenURL)
    r.GET("/:short", handlers.Redirect)
}