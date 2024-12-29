const isDev = process.env.NODE_ENV === "development"

// General
export const ARTICLES_LIMIT_PER_PAGE = 12
export const WEBSITE_URL = isDev
	? "http://localhost:3001"
	: "https://ladydubai.ae/"

// Sections
export const CONTACT_SECTION = "contact_section"
export const TRIP_PACKAGES_SECTION = "trip_packages_section"
export const ARTICLES_SECTION = "articles_section"

// Stores
export const TRIP_PACKAGE_STORE = "TRIP_PACKAGE_STORE"
export const ATTRACTIONS_STORE = "ATTRACTIONS_STORE"
export const AIRPORTS_STORE = "AIRPORTS_STORE"
export const COUNTRIES_STORE = "COUNTRIES_STORE"
export const CURRENCIES_STORE = "CURRENCIES_STORE"
export const LANGUAGES_STORE = "LANGUAGES_STORE"
export const CONTACTS_STORE = "CONTACTS_STORE"
export const HOME_PAGE_STORE = "HOME_PAGE_STORE"
export const WHY_US_PAGE_STORE = "WHY_US_PAGE_STORE"
export const TERMS_OF_USE_PAGE_STORE = "TERMS_OF_USE_PAGE_STORE"
export const DISCLAIMER_PAGE_STORE = "DISCLAIMER_PAGE_STORE"
export const CANCELLATION_POLICY_PAGE_STORE = "CANCELLATION_POLICY_PAGE_STORE"
export const PRIVACY_POLICY_PAGE_STORE = "PRIVACY_POLICY_PAGE_STORE"
export const LOCALES_STORE = "LOCALES_STORE"
export const BLOG_STORE = "BLOG_STORE"
export const BLOG_PAGE_STORE = "BLOG_PAGE_STORE"
export const ATTRACTIONS_CATEGORIES_STORE = "ATTRACTIONS_CATEGORIES_STORE"
export const SOCIAL_MEDIAS_STORE = "SOCIAL_MEDIAS_STORE"

// Stripe
export const STRIPE_SECRET_KEY =
	"sk_test_51PskLCP8VCYaOIWobTPBRKwf6f8eVsDkUWv9u6KwWeUk9MxNmA43mjXb0HoHc5fEpOdrAksAVUYKtwQlF7ESVLjn00rGGsSaWk"

export const STRIPE_SUCCESS_URL = WEBSITE_URL
export const STRIPE_CANCEL_URL = WEBSITE_URL

// Countries
export const COUNTRIES_ENDPOINT =
	"https://restcountries.com/v3.1/all?fields=name"

// API
export const API_PAYMENTS = (tripPackageId: number) =>
	`/api/payments?tripPackageId=${tripPackageId}`

// Supabase
export const SUPABASE_KEY =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqcXB1cHJxd25wanFwZ2FwZHl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk5Mjg5NzIsImV4cCI6MjAzNTUwNDk3Mn0.Sj_M_vvrLBzsqTfKx3g3IWaV0ZW474S9YhZgiO5OsLc"
export const SUPABASE_URL = "https://vjqpuprqwnpjqpgapdyt.supabase.co"
export const SUPABASE_REDIRECT = false
export const SUPABASE_SERVICE_KEY =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqcXB1cHJxd25wanFwZ2FwZHl0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxOTkyODk3MiwiZXhwIjoyMDM1NTA0OTcyfQ.I6PHUrlrUqF7FtVlGLpfvVsTdHvlkDNIwyPSySm7hXs"

export const SUPABASE_AIRPORTS_POOL_TABLE = "airports_pool"
export const SUPABASE_ATTRACTIONS_POOL_TABLE = "attractions_pool"
export const SUPABASE_ACCOMMODATIONS_FEATURES_TABLE = "accommodations_features"
export const SUPABASE_ATTRACTIONS_CATEGORIES_TABLE = "attractions_categories"
export const SUPABASE_TRIP_PACKAGES_TABLE = "trippackages"
export const SUPABASE_LANGUAGES_TABLE = "languages"
export const SUPABASE_CONTACTS_TABLE = "contacts"
export const SUPABASE_HOME_PAGE_TABLE = "home_page"
export const SUPABASE_BLOG_PAGE_TABLE = "blog_page"
export const SUPABASE_WHY_US_PAGE_TABLE = "why_us_page"
export const SUPABASE_TERMS_OF_USE_PAGE_TABLE = "terms_of_use_page"
export const SUPABASE_CANCELLATION_POLICY_PAGE_TABLE =
	"cancellation_policy_page"
export const SUPABASE_DISCLAIMER_PAGE_TABLE = "disclaimer_page"
export const SUPABASE_PRIVACY_POLICY_PAGE_TABLE = "privacy_policy_page"
export const SUPABASE_BLOG_TABLE = "blog"
export const SUPABASE_LOCALES_TABLE = "locales"
export const SUPABASE_TRIP_PACKAGE_ATTRACTIONS_TABLE =
	"trip_package_attractions"
export const SUPABASE_SOCIAL_MEDIAS_TABLE = "social_medias"
export const SUPABASE_WHATSAPP_TABLE = "whatsapp"

export const SUPABASE_ID_FIELD = "id"
export const SUPABASE_SLUG_FIELD = "slug"
export const SUPABASE_TRIP_PACKAGE_ID_FIELD = "trip_package_id"
export const SUPABASE_ATTRACTION_ID_FIELD = "attraction_id"
export const SUPABASE_LOCALE_ACRONYM_FIELD = "locale_acronym"
export const SUPABASE_ATTRACTION_CATEGORY_ID_FIELD = "attraction_category_id"
