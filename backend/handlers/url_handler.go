package handlers

import (
	"log"
	"net/http"
	"sync"

	"goshorty/utils"

	"github.com/gin-gonic/gin"
)

var urlMap = make(map[string]string)
var mu sync.RWMutex

func ShortenURL(c *gin.Context) {
	var req struct {
		URL string `json:"url"`
	}

	if err := c.BindJSON(&req); err != nil {
		log.Printf("BindJSON error: %v", err)
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
		return
	}

	log.Printf("Received URL to shorten: %s", req.URL)
	short := utils.GenerateShortCode()

	mu.Lock()
	urlMap[short] = req.URL
	mu.Unlock()

	log.Printf("Shortened %s to %s", req.URL, short)
	c.JSON(http.StatusOK, gin.H{"original": req.URL, "short": short})
}

func Redirect(c *gin.Context) {
	short := c.Param("short")

	mu.RLock()
	original, exists := urlMap[short]
	mu.RUnlock()

	if !exists {
		c.JSON(http.StatusNotFound, gin.H{"error": "URL not found"})
		return
	}

	c.Redirect(http.StatusMovedPermanently, original)
}
