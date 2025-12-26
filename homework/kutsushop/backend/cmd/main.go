package main

import (
	"net/http"

	//"encoding/json"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
	"github.com/kutsushop/internal/handler"
)

func main() {
	r := chi.NewRouter()

	r.Use(middleware.Logger)
	r.Use(cors.Handler(cors.Options{
		AllowedOrigins: []string{"*"},
		AllowedMethods: []string{"GET", "POST", "PUT", "DELETE"},
		AllowedHeaders: []string{"*"},
	}))

	DATA_API_URL := "https://cnnjnavkemrzbegsbwbw.supabase.co"
	DATA_API_KEY := "sb_secret_6biUP7aTRu5c-FylFAO-JA_jYhl2SUn"

	USERS_API_URL := "https://cnnjnavkemrzbegsbwbw.supabase.co"
	USERS_API_KEY := "sb_secret_6biUP7aTRu5c-FylFAO-JA_jYhl2SUn"

	h_data := handler.New(DATA_API_URL, DATA_API_KEY)
	h_users := handler.New(USERS_API_URL, USERS_API_KEY)

	r.Get("/data", h_data.GetAllData)
	r.Get("/sellers", h_data.GetAllSellers)
	r.Get("/shoes", h_data.GetAllShoes)

	r.Post("/shoes_sales", h_data.CreateShoesSales)
	r.Post("/create_sellers", h_data.CreateSellers)

	r.Get("/users", h_users.GetAllData)
	r.Post("/create_users", h_users.CreateUsers)

	r.Get("/excel", h_data.GetExcelFile)

	r.Post("/update_users", h_users.UpdateUsers)
	r.Post("/update_sellers", h_data.UpdateSellers)

	http.ListenAndServe(":3000", r)
}
