package main

import (
    "github.com/gin-gonic/gin"
    "log"
    "goshorty/routes"
)

func main() {
    r := gin.Default()
    routes.SetupRoutes(r)
    log.Println("GoShorty running on :8080")
    r.Run(":8080")
}