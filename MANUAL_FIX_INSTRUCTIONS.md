# Manual Fix Instructions for index.html

## Problem
The images in the "Two Service Focus" section are not appearing on the right side in desktop view.

## Root Cause
The images are currently **nested inside** the text divs, which prevents them from being positioned side-by-side on desktop.

## Solution
Move the images **outside** the text divs so they become sibling elements in the grid.

---

## Step-by-Step Instructions

### 1. Find the TwoServiceFocus Component
Look for the line that says `const TwoServiceFocus = () => {` (around line 198)

### 2. Fix the Home Service Section (First Service)

**FIND these lines (around lines 205-211):**
```javascript
<div className="order-1 md:order-first">
    <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Already Have a Patch? Home Service (₹799)</h3>
    <p className="text-lg text-gray-700 mb-6 leading-relaxed">Professional patch maintenance at your doorstep. We handle everything—removal, cleaning, and re-fixing.</p>
    <div className="order-2">
        {/* Home Service Process */}
        <img src="home-service-process.jpeg" alt="Home Patch Service" className="w-full rounded-xl shadow-lg object-cover" />
    </div>
```

**CHANGE TO:**
```javascript
<div>
    <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Already Have a Patch? Home Service (₹799)</h3>
    <p className="text-lg text-gray-700 mb-6 leading-relaxed">Professional patch maintenance at your doorstep. We handle everything—removal, cleaning, and re-fixing.</p>
```

**Then FIND the closing `</div>` for this section (around line 246) and ADD the image div AFTER it:**
```javascript
                </div>
                <div>
                    {/* Home Service Process */}
                    <img src="home-service-process.jpeg" alt="Home Patch Service" className="w-full rounded-xl shadow-lg object-cover" />
                </div>
            </div>
```

### 3. Fix the Home Demo Section (Second Service)

**FIND these lines (around lines 255-261):**
```javascript
<div className="order-1 md:order-2">
    <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">New to Hair Patches? Home Demo (₹299)</h3>
    <p className="text-lg text-gray-700 mb-6 leading-relaxed">Try real hair patches at home before you decide. See, feel, and understand what's right for you.</p>
    <div className="order-2 md:order-1">
        {/* Home Demo Samples */}
        <img src="home-demo-samples.jpeg" alt="Home Demo Trial" className="w-full rounded-xl shadow-lg object-cover" />
    </div>
```

**CHANGE TO:**
```javascript
<div>
    <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">New to Hair Patches? Home Demo (₹299)</h3>
    <p className="text-lg text-gray-700 mb-6 leading-relaxed">Try real hair patches at home before you decide. See, feel, and understand what's right for you.</p>
```

**Then FIND the closing `</div>` for this section (around line 293) and ADD the image div AFTER it:**
```javascript
                </div>
                <div>
                    {/* Home Demo Samples */}
                    <img src="home-demo-samples.jpeg" alt="Home Demo Trial" className="w-full rounded-xl shadow-lg object-cover" />
                </div>
            </div>
```

---

## What This Does

- **Desktop view**: Text on left, image on right (side-by-side)
- **Mobile view**: Text first, then image below (stacked vertically)

This matches the layout pattern used in your hero section.

---

## After Making Changes

1. Save the file
2. Refresh your browser
3. Test on both desktop and mobile views
4. Commit to Git: `git add index.html && git commit -m "Fix desktop image layout in service sections"`
5. Push to GitHub: `git push origin main`
