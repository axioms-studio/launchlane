# Project Setup Guide

Welcome to the project setup guide! Follow these steps to get the project up and running effortlessly.

---

## **1. Download and Install Herd**

- Visit [Herd](https://herd.dev/) and download the latest version.

### **1.1 (Optional) PHP Settings**

To ensure smooth operation, increase the following PHP settings under the **PHP tab**:

- **File Upload Size**: `2048`
- **Memory Limit**: `-1`

---

## **2. Install Dependencies**

Navigate to the project folder using your terminal and run:

```bash
npm install
```

---

## **3. Install Composer Dependencies**

Run the following command to install PHP dependencies:

```bash
composer install
```

---

## **4. Run Vite for Asset Compilation**

Use the command below to start Vite for asset building:

```bash
npx vite
```

---

## **5. Create \*\***`.env`\***\* File**

Copy the example environment file:

```bash
cp .env.example .env
```

Then edit the `.env` file with appropriate values.

---

## **6. Generate Application Key**

Run the following command to generate a new application key:

```bash
php artisan key:generate
```

Copy the generated `APP_KEY` and update the `.env` file.

---

## **7. Start Docker Containers**

To start the MySQL database and other containers, run:

```bash
docker-compose up -d
```

---

## **8. Run Migrations**

Apply database migrations using:

```bash
php artisan migrate
```

---

## **9. Verify and Add Missing \*\***`.env`\***\* Variables**

Check for any missing environment variables and add them as needed. Reach out to the project administrator if you are unsure about specific values.

---

## **You're All Set!** 🎉

The project should now be running. Happy coding!
