# Content Editing Guide for BizLand Website

## Overview
This website now uses a JSON file to store all text content, making it easy for non-technical users to update the website without touching HTML code.

## How to Edit Content

### 1. Locate the Content File
The content is stored in: `assets/data/content.json`

### 2. Edit the JSON File
Open the `content.json` file in any text editor (like Notepad, TextEdit, or VS Code).

### 3. Understanding the Structure

The JSON file is organized into sections:

#### Site Information
```json
"site": {
  "title": "Ledger Logic",           // Your company name
  "description": "Professional accounting and business services",  // Website description
  "contact": {
    "email": "contact@example.com",   // Contact email
    "phone": "+1 5589 55488 55"      // Contact phone
  }
}
```

#### Navigation Menu
```json
"navigation": {
  "menu": [
    { "text": "Home", "href": "#hero", "active": true },
    { "text": "About", "href": "#about" },
    // Add or remove menu items here
  ]
}
```

#### Hero Section (Main Banner)
```json
"hero": {
  "title": "Welcome to",
  "highlight": "BizLand",            // Highlighted text
  "subtitle": "We are team of talented designers making websites with Bootstrap",
  "buttons": {
    "primary": "Get Started",
    "secondary": "Watch Video"
  }
}
```

#### Services
```json
"services": {
  "services": [
    {
      "icon": "bi-activity",         // Bootstrap icon class
      "title": "Service Name",
      "description": "Service description"
    }
  ]
}
```

#### Team Members
```json
"team": {
  "members": [
    {
      "image": "assets/img/team/team-1.jpg",
      "name": "John Doe",
      "position": "CEO",
      "social": {
        "twitter": "#",
        "facebook": "#",
        "instagram": "#",
        "linkedin": "#"
      }
    }
  ]
}
```

#### Pricing Plans
```json
"pricing": {
  "plans": [
    {
      "name": "Free",
      "price": 0,
      "period": "month",
      "features": ["Feature 1", "Feature 2"],
      "excluded": [3, 4],           // Features to show as unavailable
      "featured": false             // Highlight this plan
    }
  ]
}
```

#### FAQ Items
```json
"faq": {
  "items": [
    {
      "question": "Your question here?",
      "answer": "Your answer here.",
      "active": true                // Show this FAQ expanded by default
    }
  ]
}
```

#### Contact Information
```json
"contact": {
  "info": {
    "address": {
      "title": "Address",
      "text": "Your address here"
    },
    "phone": {
      "title": "Call Us",
      "text": "Your phone number"
    },
    "email": {
      "title": "Email Us",
      "text": "your@email.com"
    }
  }
}
```

## Important Notes

### 1. JSON Syntax
- Always use double quotes `"` for text
- Separate items with commas `,`
- Don't forget closing braces `}` and brackets `]`
- Be careful with special characters - use `\"` for quotes within text

### 2. Icons
For icons, use Bootstrap Icons classes:
- `bi-activity` for activity icon
- `bi-people` for people icon
- `bi-geo-alt` for location icon
- See full list at: https://icons.getbootstrap.com/

### 3. Images
- Keep image paths as they are unless you're replacing images
- Image paths should be relative to the website root
- Example: `assets/img/team/team-1.jpg`

### 4. Links
- Use `#` for internal page links (like `#about`)
- Use full URLs for external links (like `https://example.com`)

## Common Edits

### Changing Company Name
Find the `"site"` section and update:
```json
"title": "Your New Company Name"
```

### Updating Contact Information
In the `"site"` section:
```json
"contact": {
  "email": "your@email.com",
  "phone": "Your Phone Number"
}
```

### Adding a New Service
In the `"services"` section, add a new object:
```json
{
  "icon": "bi-gear",
  "title": "New Service",
  "description": "Description of your new service"
}
```

### Updating Team Members
In the `"team"` section, modify the `"members"` array:
```json
{
  "image": "assets/img/team/new-member.jpg",
  "name": "New Member Name",
  "position": "New Position",
  "social": {
    "twitter": "https://twitter.com/username",
    "facebook": "https://facebook.com/username",
    "instagram": "https://instagram.com/username",
    "linkedin": "https://linkedin.com/in/username"
  }
}
```

## Testing Changes

1. Save the JSON file
2. Refresh your browser
3. The changes should appear immediately

## Troubleshooting

### Content Not Updating?
- Make sure you saved the JSON file
- Check browser console for errors (F12 → Console)
- Verify JSON syntax is correct

### JSON Syntax Errors?
- Use an online JSON validator like jsonlint.com
- Check for missing commas, quotes, or brackets

### Images Not Showing?
- Verify image paths are correct
- Make sure images exist in the specified folders

## Need Help?

If you encounter issues:
1. Check the browser console for error messages
2. Verify your JSON syntax
3. Make sure all quotes and brackets are properly closed
4. Test with a simple change first before making major edits

## Backup

Always keep a backup of your original `content.json` file before making major changes! 