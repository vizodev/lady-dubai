const isDevelopment = process.env.NODE_ENV === "development"

// Stripe
export const STRIPE_API_VERSION = "2024-06-20"
export const STRIPE_SECRET_KEY = isDevelopment
	? "sk_test_51PskLCP8VCYaOIWobTPBRKwf6f8eVsDkUWv9u6KwWeUk9MxNmA43mjXb0HoHc5fEpOdrAksAVUYKtwQlF7ESVLjn00rGGsSaWk"
	: "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"
export const STRIPE_WEBHOOK_SIGNING_SECRET = isDevelopment
	? "whsec_GRrdigxylbbMxbPXT04yiJLdgqCX21yu"
	: "whsec_YfdSEhD8a1yXX2ohcOYtmbOkdw8WY1Sd"

// Supabase
export const SUPABASE_URL = "https://vjqpuprqwnpjqpgapdyt.supabase.co"
export const SUPABASE_KEY =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqcXB1cHJxd25wanFwZ2FwZHl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk5Mjg5NzIsImV4cCI6MjAzNTUwNDk3Mn0.Sj_M_vvrLBzsqTfKx3g3IWaV0ZW474S9YhZgiO5OsLc"

export const SUPABASE_BOOKINGS_TABLE = "bookings"
