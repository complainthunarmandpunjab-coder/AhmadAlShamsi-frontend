# Ahmad Al Shamsi Real Estate - Complete API Specification & Backend Blueprint

This document specifies the **end-to-end (A to Z) backend API architecture** required to power all frontend pages, user interactions, search filters, lead forms, and administrative management for the Ahmad Al Shamsi Real Estate platform.

---

## 1. System Overview & Standards

- **Base URL:** `https://api.ahmadalshamsirealestate.ae/api/v1`
- **Protocol:** HTTPS / RESTful JSON
- **Authentication:** Bearer JWT tokens (`Authorization: Bearer <token>`) for Admin & Agent routes; Public access for browsing and lead generation.
- **Localization Header:** `Accept-Language: en` or `Accept-Language: ar` (supports dual language Arabic / English content).
- **Pagination Standard:** `page` (default: 1), `limit` (default: 12), `total`, `totalPages`.

---

## 2. API Modules Summary

| Module | Purpose | Associated Frontend Pages |
| :--- | :--- | :--- |
| **1. Properties & Listings** | Search, filter, details, specs, gallery | `/`, `/buy`, `/rent`, `/properties`, `/property/:id`, `/properties-single-slider/:id` |
| **2. Communities & Areas** | Area showcases, guide content, community listings | `/`, `/communities` |
| **3. Off-Plan Developments** | Developer projects, payment schedules, brochures | `/`, `/offplan`, `/off-plan` |
| **4. Sell & Property Valuation** | Face-to-face valuation requests, property listing leads | `/sell`, `/sell-my-property` |
| **5. Holiday Homes & Short-Term** | 20% management signups, bookings, revenue estimates | `/holiday-homes` |
| **6. Services & Property Management**| Leasing management inquiries, corporate landlord deals | `/services` |
| **7. Leads & Showing Inquiries** | "Request a Showing", Contact form, WhatsApp clicks | `/property/:id`, `/contact` |
| **8. Testimonials & Google Reviews** | Verified Google reviews, client feedback | `/`, `/about` |
| **9. Team & Agents** | Certified consultants, direct WhatsApp & phone numbers | `/`, `/our-team`, `/about-us` |
| **10. Settings & Company Metadata** | Office hours, phones, addresses, legal terms | Layout Header & Footer, `/terms`, `/privacy` |

---

## 3. Detailed Endpoint Specifications

### 3.1 Properties & Listings API

#### `GET /properties`
Fetches paginated list of properties with full filtering (Buy, Rent, Status, Location, Specs).
- **Query Parameters:**
  - `status`: `buy` | `rent` | `all`
  - `propertyCategory`: `residential` | `commercial`
  - `propertyType`: `flat` | `apartment` | `villa` | `house` | `land_plot` | `commercial` | `office` | `penthouse`
  - `location`: string (e.g. `Maryam Island`, `Al Khan`, `Al Nahda`, `Hoshi`, `Aljada`)
  - `minPrice`: number (e.g. `400000`)
  - `maxPrice`: number (e.g. `3500000`)
  - `beds`: number | `any` (e.g. `1`, `2`, `3`, `4`, `5`)
  - `baths`: number (e.g. `2`)
  - `search`: string (keyword search on title, address, description, or property ID)
  - `sortBy`: `price_asc` | `price_desc` | `newest` | `roi_desc`
  - `page`: number (default: `1`)
  - `limit`: number (default: `12`)
- **Response `200 OK`:**
```json
{
  "success": true,
  "data": [
    {
      "id": 28,
      "propertyId": "hoshi24",
      "slug": "5-bedroom-spacious-villa-for-sale-hoshi-28",
      "title": {
        "en": "5 Bedroom Spacious Villa for Sale | Huge Layout with Majlis | Maid Room",
        "ar": "فيلا فسيحة 5 غرف نوم للبيع | مخطط واسع مع مجلس | غرفة خادمة"
      },
      "forRent": false,
      "category": "residential",
      "type": "villa",
      "price": 3200000,
      "priceCurrency": "AED",
      "priceDisplay": "AED 3,200,000",
      "sqft": 10000,
      "beds": 5,
      "baths": 5,
      "rooms": 5,
      "floors": 2,
      "garage": 1,
      "location": {
        "address": "Hoshi, Sharjah",
        "community": "Hoshi",
        "city": "Sharjah",
        "state": "Sharjah",
        "zipCode": "0000",
        "latitude": 25.3051,
        "longitude": 55.5182
      },
      "thumbnail": "/Golden-Hour Waterfront Skyline.png",
      "isFeatured": true,
      "createdAt": "2024-01-15T08:00:00Z"
    }
  ],
  "meta": {
    "total": 31,
    "page": 1,
    "limit": 12,
    "totalPages": 3
  }
}
```

#### `GET /properties/:id` or `GET /properties/slug/:slug`
Fetches complete single property details including gallery, highlights, full specs, amenities, and assigned agent.
- **Used by Frontend:** `/property/:id` and `/properties-single-slider/:id`
- **Response `200 OK`:**
```json
{
  "success": true,
  "data": {
    "id": 28,
    "propertyId": "hoshi24",
    "title": {
      "en": "5 Bedroom Spacious Villa for Sale | Huge Layout with Majlis | Maid Room",
      "ar": "فيلا فسيحة 5 غرف نوم للبيع | مخطط واسع مع مجلس | غرفة خادمة"
    },
    "description": {
      "en": "Welcome to Ahmad Alshamsi Real Estate Services! Dear Landlords, List your units with us...",
      "ar": "أهلاً بكم في شركة أحمد الشامسي للعقارات! فيلا واسعة فاخرة 5 غرف نوم..."
    },
    "forRent": false,
    "category": "residential",
    "type": "villa",
    "price": 3200000,
    "priceDisplay": "AED 3,200,000",
    "sqft": 10000,
    "beds": 5,
    "baths": 5,
    "rooms": 5,
    "floors": 2,
    "garage": 1,
    "images": [
      "/Golden-Hour Waterfront Skyline.png",
      "/hero.png",
      "/Golden Hour Waterfront Promenade.png",
      "/footer.png"
    ],
    "highlights": {
      "en": ["Community Area", "Coffee Cafe", "Redefined Location", "High-Quality Finishes", "Car Parking"],
      "ar": ["منطقة مجتمعية هادئة", "مقاهي ومطاعم", "موقع استراتيجي", "تشطيبات فائقة الجودة", "مواقف خاصة"]
    },
    "features": [
      "Center Cooling", "Modern Kitchen", "Heating", "Pet Friendly", 
      "Maid Room", "Majlis", "Covered Parking", "Balcony"
    ],
    "location": {
      "address": "hoshi sharjah",
      "state": "Sharjah",
      "city": "Sharjah",
      "zip": "0000"
    },
    "agent": {
      "id": 1,
      "name": "Shakeel / Admin",
      "role": "Property Specialist",
      "phone": "+97165229330",
      "whatsapp": "+97165229330",
      "email": "info@ahmadalshamsirealestate.ae",
      "avatar": "https://images.unsplash.com/photo-1560250097-0b93528c311a"
    },
    "similarProperties": [31, 32, 33]
  }
}
```

#### `GET /properties/featured`
Returns top featured properties for the Home page slider tabs (Buy / Rent).
- **Query:** `type=buy` or `type=rent`, `limit=6`

---

### 3.2 Sell & Property Valuation API

#### `POST /sell/valuation-request`
Submits seller information for free face-to-face property assessment by sales specialists.
- **Used by Frontend:** `/sell` and `/sell-my-property`
- **Request Body:**
```json
{
  "name": "Mohammed Tariq",
  "phone": "+971501234567",
  "email": "m.tariq@example.com",
  "propertyType": "Villa",
  "location": "Hoshi, Sharjah",
  "bedrooms": "5",
  "expectedPrice": "AED 3,200,000",
  "notes": "Looking for a face-to-face valuation this Thursday.",
  "preferredContactMethod": "whatsapp"
}
```
- **Response `201 Created`:**
```json
{
  "success": true,
  "message": "Valuation request received successfully. A licensed Sharjah advisor will contact you within 2 hours.",
  "leadId": "VAL-2026-9041"
}
```

#### `GET /sell/process-steps`
Returns dynamic step-by-step guides (Valuation, Marketing, Offer agreed, Transfer of Ownership).

---

### 3.3 Holiday Homes & Short-Term Rentals API

#### `POST /holiday-homes/inquiry`
Submits landlord inquiry for vacation home full-service management (20% fee model).
- **Used by Frontend:** `/holiday-homes`
- **Request Body:**
```json
{
  "ownerName": "Fatima Al Hosani",
  "phone": "+971521239876",
  "email": "fatima@example.com",
  "propertyLocation": "Cyan Beach Residence, Maryam Island",
  "propertyType": "1BHK Apartment",
  "isFurnished": true,
  "servicePackage": "Full Management (20%)"
}
```
- **Response `201 Created`:**
```json
{
  "success": true,
  "message": "Holiday homes inquiry recorded.",
  "inquiryId": "HH-2026-102"
}
```

#### `GET /holiday-homes/calculator`
Calculates estimated dynamic revenue comparing long-term rental income vs. short-term holiday homes income based on area and bedrooms.
- **Query:** `community=Maryam%20Island&beds=2`
- **Response:** `{ "estimatedLongTerm": 85000, "estimatedShortTerm": 115000, "projectedIncrease": "30%" }`

---

### 3.4 Showing & Lead Inquiries API

#### `POST /leads/request-showing`
Submits in-person showing / visit request for a specific property.
- **Used by Frontend:** `/property/:id`, `/properties-single-slider/:id`
- **Request Body:**
```json
{
  "propertyId": 28,
  "name": "Eshan De Silva",
  "email": "eshan@example.com",
  "phone": "+971509988776",
  "message": "Hello, I am interested in viewing this 5 Bedroom Villa in Hoshi this Saturday.",
  "preferredDate": "2026-10-18",
  "preferredTimeSlot": "morning"
}
```
- **Response `201 Created`:**
```json
{
  "success": true,
  "message": "Showing request submitted successfully. Our agent will call to confirm."
}
```

#### `POST /leads/contact-us`
Submits general inquiry from Contact page.
- **Used by Frontend:** `/contact`
- **Request Body:**
```json
{
  "firstName": "Ahmed",
  "lastName": "Al Mansoori",
  "email": "ahmed@example.com",
  "phone": "+971501234567",
  "serviceRequired": "Property Leasing & Management",
  "message": "Inquiring about bulk building management services in Al Khan."
}
```

---

### 3.5 Communities API

#### `GET /communities`
Returns all covered Sharjah communities with highlights and photos.
- **Used by Frontend:** `/`, `/communities`
- **Response `200 OK`:**
```json
{
  "success": true,
  "data": [
    {
      "id": "maryam-island",
      "name": { "en": "Maryam Island", "ar": "جزيرة مريم" },
      "slug": "maryam-island",
      "image": "/Golden Hour Waterfront Promenade.png",
      "highlight": {
        "en": "Waterfront promenade living with boutique dining and pristine beachfront views.",
        "ar": "إطلالة مائية ساحرة مع ممشى للتنزه، مقاهي ومطاعم شاطئية راقية."
      },
      "activeListingsCount": 18,
      "avgRent": "AED 85,000 / yr",
      "avgSalePrice": "AED 1,200,000"
    }
  ]
}
```

#### `GET /communities/:slug/properties`
Returns all properties located specifically inside a single community.

---

### 3.6 Off-Plan Investments API

#### `GET /offplan/projects`
Fetches upcoming and under-construction developments in Sharjah.
- **Used by Frontend:** `/offplan`, `/off-plan`
- **Response `200 OK`:**
```json
{
  "success": true,
  "data": [
    {
      "id": "eagle-hills-maryam-beach",
      "title": { "en": "Eagle Hills - Maryam Beach Residences", "ar": "إيغل هيلز - مساكن شاطئ مريم" },
      "developer": "Eagle Hills",
      "handover": "Q4 2025",
      "paymentPlan": "60/40 Post-Handover",
      "startingPrice": "AED 460,000",
      "goldenVisaEligible": true,
      "image": "/Golden-Hour Waterfront Skyline.png"
    }
  ]
}
```

#### `POST /offplan/request-brochure`
Downloads or emails the detailed project brochure and master floor plans.

---

### 3.7 Testimonials & Google Reviews API

#### `GET /testimonials`
Returns verified client reviews and ratings.
- **Used by Frontend:** `/`, `/about`
- **Response `200 OK`:**
```json
{
  "success": true,
  "averageRating": 4.9,
  "totalReviews": 128,
  "googleMapsUrl": "https://maps.google.com/?cid=ahmadalshamsi",
  "data": [
    {
      "id": 1,
      "clientName": "Eshan De Silva",
      "clientRole": "Client",
      "agentMentioned": "Shakeel",
      "review": "Shakeel assisted me in getting a beautiful apartment. He helped me in a way that no one has ever helped me out...",
      "rating": 5,
      "verifiedGoogle": true,
      "date": "2024-02-10"
    }
  ]
}
```

---

### 3.8 Company Metadata & Configuration API

#### `GET /settings/company-info`
Provides centralized contact numbers, working hours, and licensing information for dynamic layout binding.
- **Used by Frontend:** Header, Footer, About page
- **Response `200 OK`:**
```json
{
  "companyName": "Ahmad Al Shamsi Real Estate",
  "phone": "+971 6 522 9330",
  "whatsapp": "+971 6 522 9330",
  "email": "info@ahmadalshamsirealestate.ae",
  "address": {
    "en": "Al Khan Street, Waterfront District, Sharjah, UAE",
    "ar": "شارع الخان، الواجهة المائية، الشارقة، الإمارات العربية المتحدة"
  },
  "openingHours": {
    "schedule": "10:00AM to 8:00PM",
    "days": "Saturday - Thursday",
    "closedDay": "Friday"
  },
  "reraLicense": "Sharjah Real Estate Registration Department (SRERD)",
  "copyrightYear": 2023
}
```

---

## 4. Admin Management APIs (Back-office CMS)

For backend developers building the admin dashboard:

| Endpoint | Method | Role | Description |
| :--- | :--- | :--- | :--- |
| `/admin/auth/login` | `POST` | Public | Admin & Agent JWT login |
| `/admin/properties` | `POST` | Admin/Agent | Create new property listing with HD photos |
| `/admin/properties/:id` | `PUT` | Admin/Agent | Edit property price, status, or details |
| `/admin/properties/:id` | `DELETE`| Admin | Unlist or archive property |
| `/admin/leads` | `GET` | Admin/Agent | View all valuation, showing, and contact leads |
| `/admin/leads/:id/status`| `PATCH`| Admin/Agent | Update lead status (`NEW`, `CONTACTED`, `VIEWING_SCHEDULED`, `CLOSED`) |
| `/admin/media/upload` | `POST` | Admin/Agent | Multi-file upload for HD property photos & floorplans |

---

## 5. Security & Rate Limiting

1. **Lead Form Protection:** Cloudflare Turnstile / reCAPTCHA v3 on all lead forms (`/sell/valuation-request`, `/leads/contact-us`, `/leads/request-showing`).
2. **Rate Limiting:** Maximum 10 form submissions per IP per hour to prevent spam.
3. **Data Sanitization:** Strict regex validation on UAE phone numbers (`^(?:\+971|00971|0)?5[0-9]{8}$`).
