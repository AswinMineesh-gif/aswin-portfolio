# Aswin Mineesh — Portfolio

A responsive, single-page creative portfolio inspired by the supplied screen recording:
- Dark olive / charcoal textured atmosphere and film grain
- Editorial typography and oversized hero heading
- Your supplied transparent portrait in the hero
- Pointer-reactive portrait perspective and subtle pupil movement
- Works, About and Contact sections
- Mobile navigation and responsive layouts

## 1. Open in VS Code
1. Extract `aswin-portfolio.zip`.
2. Open VS Code.
3. Select **File → Open Folder** and choose the extracted `aswin-portfolio` folder.
4. Open `index.html`.
5. Recommended: install the **Live Server** extension, right-click `index.html`, and choose **Open with Live Server**.

You can also run a local server from the VS Code terminal:
```bash
python -m http.server 5500
```
Then open `http://localhost:5500`.

## 2. Add your real details
- Replace `hello@example.com` in `index.html` with your email address.
- Replace the three sample project cards with your real project names, descriptions, images and links.
- Update the About paragraph and skill list if you want to add more information.
- Keep your portrait at `assets/aswin-portrait.png`, or change the image path in `index.html`.

The eye-follow effect is a lightweight visual approximation using your supplied 2D portrait, not a fully rigged 3D model. The portrait itself is not reshaped.

## 3. Publish with GitHub
1. Sign in to GitHub and create a **New repository** named `aswin-portfolio`.
2. Set it to **Public** (or use a private repository if your Vercel plan supports it).
3. In VS Code, open Terminal → New Terminal in the project folder.
4. Run these commands (replace `YOUR-USERNAME` with your GitHub username):
```bash
git init
git add .
git commit -m "Add my portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/aswin-portfolio.git
git push -u origin main
```
If Git asks you to sign in, complete the browser sign-in flow. If Git says `remote origin already exists`, run:
```bash
git remote set-url origin https://github.com/YOUR-USERNAME/aswin-portfolio.git
git push -u origin main
```

## 4. Deploy on Vercel
1. Sign in at https://vercel.com using GitHub.
2. Choose **Add New → Project**.
3. Import the `aswin-portfolio` repository.
4. Framework Preset: choose **Other** if asked.
5. Root Directory: `./`
6. Build Command: leave blank.
7. Output Directory: leave blank (or `.` if the screen requires a value).
8. Click **Deploy**.

This is a static HTML/CSS/JS website. It does not need `npm install`, `package.json`, React, or a build command.

After deployment, Vercel gives you a public URL. Every time you push new commits to the connected `main` branch, Vercel automatically redeploys.

## 5. Update the live website
After editing files in VS Code:
```bash
git add .
git commit -m "Update portfolio"
git push
```
Vercel will publish the changes automatically.

## Troubleshooting
- **Blank page / missing portrait:** make sure `assets/aswin-portrait.png` exists and the filename matches exactly.
- **Vercel says repository is empty:** make sure `git push -u origin main` completed successfully and the files appear on GitHub.
- **Vercel asks for a build command:** choose Other and leave the build command empty.
- **`git` is not recognized:** install Git for Windows, restart VS Code, and try again.
- **`git` asks for identity:** run `git config --global user.name "Your Name"` and `git config --global user.email "you@example.com"` with your own details.

Google Fonts are loaded online; the site uses fallback fonts if they cannot load.
