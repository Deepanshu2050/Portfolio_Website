# 📧 Gmail Setup for Contact Form

Your portfolio contact form is now configured to send emails via Gmail! Follow these steps to activate it:

## 🔐 Step 1: Generate Gmail App Password

1. **Go to your Google Account**: [myaccount.google.com](https://myaccount.google.com)

2. **Enable 2-Step Verification** (if not already enabled):
   - Navigate to **Security** → **2-Step Verification**
   - Follow the prompts to enable it

3. **Create App Password**:
   - Go to **Security** → **2-Step Verification** → scroll down to **App passwords**
   - Or directly visit: [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
   - Select app: **Mail**
   - Select device: **Other (Custom name)** → Enter "Portfolio Website"
   - Click **Generate**
   - **Copy the 16-digit password** (you won't see it again!)

## ⚙️ Step 2: Update Environment Variables

Open `/Users/deepanshujangid/Desktop/Portfolio/.env` and update:

```bash
EMAIL_USER=deepjangid2050@gmail.com
EMAIL_APP_PASSWORD=xxxx-xxxx-xxxx-xxxx  # Paste your 16-digit app password here
```

**Important**: 
- Remove any spaces from the app password
- Do NOT use your regular Gmail password
- Keep the `.env` file secure (it's already in `.gitignore`)

## 🚀 Step 3: Restart the Server

After updating `.env`, restart your backend server:

```bash
# Stop the current server (Ctrl + C in the terminal)
# Then restart:
cd server
npm run dev
```

## ✅ Step 4: Test the Contact Form

1. Open your portfolio: http://localhost:3000
2. Scroll to the Contact section
3. Fill out the form with test data
4. Click "Send Message"

**You should receive:**
- ✉️ An email notification to `deepjangid2050@gmail.com` with the message details
- 🔄 An auto-reply sent to the person who filled the form

## 📊 Database Storage

All contact form submissions are also saved to MongoDB!

**View all submissions**:
```bash
# GET request to:
http://localhost:5000/api/contact
```

Each submission includes:
- Name, email, message
- Timestamp
- Status (new/read/replied)
- IP address (for security)

## 🔒 Security Notes

1. **Never commit `.env` to Git** - It's already in `.gitignore`
2. **App Password** is safer than your regular password (can be revoked anytime)
3. **For production**: Consider rate limiting to prevent spam
4. **Admin panel**: The GET `/api/contact` endpoint should be protected with authentication

## 🎯 What Happens When Form is Submitted?

1. **Frontend validation** → Checks all fields are filled
2. **Sent to backend** → POST to `http://localhost:5000/api/contact`
3. **Saved to MongoDB** → Permanent record created
4. **Email sent to you** → Notification with message details
5. **Auto-reply sent** → Confirmation email to the sender
6. **Success message** → Displayed to the user

## 🐛 Troubleshooting

**"Failed to send message"**
- ✅ Check if backend server is running on port 5000
- ✅ Check MongoDB is running

**"Email failed but message saved"**
- ✅ Verify `EMAIL_USER` is correct in `.env`
- ✅ Verify `EMAIL_APP_PASSWORD` is the 16-digit app password (no spaces)
- ✅ Check server console for detailed error messages

**Backend not connecting**
- ✅ Make sure both servers are running:
  - Frontend: `npm run dev` (port 3000)
  - Backend: `cd server && npm run dev` (port 5000)

## 🎨 Customization

**Change email templates**: Edit `/server/utils/emailService.js`

**Modify database schema**: Edit `/server/models/Contact.js`

**Add admin protection**: Implement JWT auth for GET `/api/contact` route

---

🎉 **You're all set!** Your contact form now sends real emails and stores messages in MongoDB.
