# 🌾 Crop care — Smart Crop Health & Advisory Platform

<div align="center">

![AgriDetect Banner](https://img.shields.io/badge/AgriDetect-Empowering%20Farmers-green?style=for-the-badge&logo=leaf)
![Status](https://img.shields.io/badge/Status-Active%20Development-brightgreen?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![Offline](https://img.shields.io/badge/Offline-Supported-orange?style=for-the-badge)
![Languages](https://img.shields.io/badge/Languages-10%2B-purple?style=for-the-badge)

**A web-based platform that empowers farmers to detect crop diseases, get growth tips, and manage seasonal crops — even without an internet connection.**

[🚀 Live Demo](#) • [📖 Documentation](#) • [🐛 Report Bug](../../issues) • [💡 Request Feature](../../issues)

</div>
---
## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [How It Works](#-how-it-works)
- [Screenshots](#-screenshots)
- [Multilanguage Support](#-multilanguage-support)
- [Offline Functionality](#-offline-functionality)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [Team](#-team)
- [License](#-license)

---

## 🌱 About the Project

**AgriDetect** is a farmer-first web application built to bridge the technology gap in agriculture. Farmers across rural areas often struggle with identifying crop diseases early, lack access to expert advice, and have limited connectivity. AgriDetect solves all of these problems in one unified platform.

By simply clicking a photo of their crop, farmers can instantly:
- Know if their crop is diseased and what to do about it
- Get personalized, season-based growth tips
- Understand the best time to plant or harvest
- Access all of this in their **native language** — even **offline**

> *"The right information at the right time can save an entire harvest."*

---

## ✨ Key Features

### 🔍 Crop Disease Detection
- Click or upload a photo of any crop leaf, stem, or fruit
- AI-powered image recognition instantly identifies the disease
- Provides disease name, severity level, and recommended treatment
- Supports 50+ crop types including wheat, rice, maize, tomato, potato, cotton, and more

### 🌿 Growth Tips & Best Practices
- Crop-specific guidance on soil preparation, watering, fertilization, and pest control
- Expert-curated tips based on crop type and current growth stage
- Actionable, easy-to-understand advice for all farmer skill levels

### 📅 Seasonal Crop Guide
- Month-by-month crop calendar for different regions
- Recommends what to plant based on the current season and local climate
- Alerts for upcoming frost, monsoon, or drought conditions
- Optimal planting and harvesting windows

### 📡 Offline Mode
- Full functionality available without an internet connection
- Core models and disease database cached locally using Service Workers
- Syncs data and updates automatically when connectivity is restored
- Designed for low-bandwidth and no-bandwidth environments

### 🌐 Multilanguage Support
- Available in **10+ Indian and global languages**
- Languages include: Hindi, Punjabi, Tamil, Telugu, Kannada, Marathi, Bengali, Gujarati, Odia, and English
- Language auto-detection based on device locale
- Easy language switcher in the UI

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla / React) |
| **AI / ML** | TensorFlow.js / Python (ML model for disease detection) |
| **Backend** | Node.js / Flask (API layer) |
| **Database** | Firebase / MongoDB (crop & disease data) |
| **Offline Support** | Service Workers, PWA, IndexedDB |
| **i18n (Multilanguage)** | i18next / React-Intl |
| **Camera Access** | Web API (MediaDevices / getUserMedia) |
| **Hosting** | Vercel / Firebase Hosting |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)
- Python 3.9+ (if using the ML backend)

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/your-username/agri-detect.git
   cd agri-detect
```

2. **Install frontend dependencies**
```bash
   npm install
```

3. **Set up environment variables**
```bash
   cp .env.example .env
```
   Fill in the required values in `.env`:
```env
   REACT_APP_API_URL=http://localhost:5000
   REACT_APP_FIREBASE_KEY=your_firebase_key
   REACT_APP_ML_MODEL_PATH=/models/crop_disease_model
```

4. **Set up the ML backend (optional for local AI)**
```bash
   cd ml-server
   pip install -r requirements.txt
   python app.py
```

5. **Start the development server**
```bash
   npm start
```

6. **Open in browser**

