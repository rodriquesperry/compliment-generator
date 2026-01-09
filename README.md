# Glow | Professional Compliment Generator

A high-performance, professional recognition tool built with a focus on modular architecture and clean UI/UX. This project moves beyond simple string arrays to provide a dynamic sentence-assembly engine.

## 🌟 Overview

Glow is designed as a strategic portfolio piece for a Senior Frontend Architect. It demonstrates how to build a scalable, accessible, and performant web application using strictly Vanilla JavaScript (ES6+), HTML5, and CSS3.

## 🏗️ Technical Architecture

### 1. Modular Data Engine

The application utilizes a Fragment Assembly Logic rather than a flat array of quotes. This increases the variety of outputs exponentially.

Components: Openers, Adjectives, Attributes, and Impact statements.

Permutations: With the current dataset, the engine can generate over 2,400 unique professional compliments.

### 2. The "Morning Glow" Design System

The visual language is built on modern CSS principles:

Palette: - Background: #FDFCFB

Primary Action: #6366F1

Accent: #F43F5E

Text: #1E293B

Typography: Inter (Headings) and Outfit (Body) via Google Fonts.

UI Components: Soft shadows, responsive grid layouts, and micro-interactions for button states.

### 3. Key Features

Personalization: Real-time name injection into the generated fragments.

Smart Sharing: Integrated Web Share API with a robust document.execCommand('copy') fallback for cross-browser compatibility.

Accessibility: Uses aria-live="polite" regions to ensure screen readers announce new compliments automatically.

Performance: Zero external dependencies or frameworks, resulting in near-instant load times and a perfect Lighthouse score.

## 🚀 Installation & Usage

Since this is a vanilla project, no build step is required.

Clone the repository.

Open index.html in any modern web browser.

(Optional) Serve via Live Server in VS Code for the best development experience.

## 🛠️ Code Structure

index.html: Semantic HTML5 structure with mobile-responsive meta tags.

styles.css: CSS3 Variables (Design Tokens) and layout logic.

script.js:

fragmentData: The JSON-like structure containing sentence fragments.

ComplimentEngine: A class-based logic handler for randomization.

UI: An object-literal controller managing DOM events and state.

## 📝 License

This project is open-source and available under the MIT License.