---
title: Citywide Greenwave System Platform
description: Designed a comprehensive traffic signal coordination platform covering citywide greenwave overviews, route-level signal plans, and intersection-level configuration tools. Balanced complex UI workflows with scalable logic to support both real-time operations and long-term traffic strategy.
date: 2025-04-30
image: /img/projects/greenwave/create_road.png
minRead: 8
author:
  name: Yutong Han
  avatar:
    src: /public/img/yutong.jpg
    alt: Yutong Han
---

<div class="grid grid-cols-2 gap-4 mb-8">
  <div class="bg-blue-50 rounded-lg p-4">
    <strong>Client</strong><br>
    Tranalytic Technology Co., Ltd.
  </div>
  <div class="bg-blue-50 rounded-lg p-4">
    <strong>Tool</strong><br>
    Adobe Illustrator  &nbsp;  UI & UX Design 
  </div>
</div>

This was by far the **most complex interface I’ve ever designed**—the kind of project that consumed weeks of intense discussion. For nearly three weeks, we met daily with the Qiandaohu team to refine requirements. It felt like designing under lockdown, but the challenge was intellectually rewarding.

The platform offers a complete pipeline—from **city-level greenwave overview** to the **creation, editing, and detailed inspection** of individual greenwave signal plans. This full-stack visual and functional system was what I loved most. It allowed me to design not just for isolated data visualizations, but for **an interconnected system**， where modifying a single traffic signal plan could ripple across multiple roadways and the entire city’s traffic strategy. It’s a true “point–line–surface” architecture: point for intersections, line for greenwave routes, and surface for full-city coordination.

## Citywide Greenwave Overview

Upon entering the dashboard, users see a map of all existing greenwave corridors across the city. The left panel features filters by district, route name search, and sort-by-update-time functions.

<figure class="blog-img-container">
  <img src="/img/projects/greenwave/1.png" class="blog-img" alt="img" loading="lazy" />
  <figcaption class="blog-img-caption">UI: Citywide Greenwave System Platform Overview with mock data</figcaption>
</figure>

Users can create a new greenwave route by clicking “Add Route.” The map then switches to display all signal-controlled intersections (sourced from the DOP database). Users can click intersections in sequence to construct a new greenwave corridor.

<figure class="blog-img-container">
  <img src="/img/projects/greenwave/create_road.png" class="blog-img" alt="img" loading="lazy" />
  <figcaption class="blog-img-caption">UI: Citywide Greenwave System Platform creating road page with mock data</figcaption>
</figure>

<figure class="blog-img-container">
  <img src="/img/projects/greenwave/step2.png" class="blog-img" alt="img" loading="lazy" />
  <figcaption class="blog-img-caption">UI: Creating road while selected inersections</figcaption>
</figure>

If a user clicks a route on the map or list, it highlights and triggers a floating card. Clicking “View Details” opens the full greenwave configuration page.

<figure class="blog-img-container">
  <img src="/img/projects/greenwave/2.png" class="blog-img" alt="img" loading="lazy" />
  <figcaption class="blog-img-caption">UI: Selected one road</figcaption>
</figure>

When an intersection belongs to **multiple greenwave routes**, clicking it will trigger a pop-up showing all related corridors for the user to choose from.

<figure class="blog-img-container">
  <img src="/img/projects/greenwave/3.png" class="blog-img-small" alt="img" loading="lazy" />
  <figcaption class="blog-img-caption">UI: Selected mutiple roads</figcaption>
</figure>

## Greenwave Details Page

The landing section in the details page is the Greenwave Overview. It consists of five key modules.

<figure class="blog-img-container">
  <img src="/img/projects/greenwave/4.png" class="blog-img-large" alt="img" loading="lazy" />
  <figcaption class="blog-img-caption">UI: Greenwave detail page overview with mock data</figcaption>
</figure>

1. **Basic Route Info**

Includes signalized intersection names, coordinates, controller brand and ID, distance between intersections and so on.

<figure class="blog-img-container">
  <img src="/img/projects/greenwave/5.png" class="blog-img-small" alt="img" loading="lazy" />
  <figcaption class="blog-img-caption">UI: basic info part with mock data</figcaption>
</figure>

2. **Plan Grouping Module**

Each signal plan belongs to a group—e.g., Workday, Non-Workday, Rainy Day, AI-Auto, or Temporary Plans.

<figure class="blog-img-container">
  <img src="/img/projects/greenwave/6.png" class="blog-img" alt="img" loading="lazy" />
  <figcaption class="blog-img-caption">UI: plan grouping part with mock data</figcaption>
</figure>

3. **Route Geolocation Diagram**

Displays all intersections on the route, their geographic positions, and road segment shapes between them.

<figure class="blog-img-container">
  <img src="/img/projects/greenwave/7.png" class="blog-img-small" alt="img" loading="lazy" />
  <figcaption class="blog-img-caption">UI: route geolocation part with mock data</figcaption>
</figure>

4. **Daily Schedule vs Runtime Logs**

A timeline from 00:00 to 24:00 compares planned vs. actual greenwave plans. For instance, the planned “Morning Peak Plan A” might be overridden by the “Rainy Day Plan B.” A red vertical line indicates the current time. Users can drag the timeline to see changes, with the downstream time–distance diagram updating in real time.

<figure class="blog-img-container">
  <img src="/img/projects/greenwave/8.png" class="blog-img-small" alt="img" loading="lazy" />
  <figcaption class="blog-img-caption">UI: Daily Schedule vs Runtime Logs with mock data</figcaption>
</figure>

5. **Time–Distance Diagram**

This visual highlights signal timings per direction. The Y-axis shows time; X-axis shows distance. Each vertical line represents a signalized intersection, with red and green bars indicating red/green phases. Together, they form the greenwave bandwidth—the wider the bandwidth, the higher the chance of uninterrupted green signals, thus lower vehicle stop rates and higher speeds.

<figure class="blog-img-container">
  <img src="/img/projects/greenwave/9.png" class="blog-img" alt="img" loading="lazy" />
  <figcaption class="blog-img-caption">UI: Time–Distance Diagram with mock data</figcaption>
</figure>

## Plan Design Section

This extends the “Plan Grouping” module. Users can:

- Add/delete plan groups (e.g., peak hours, holidays).

- Filter plans by group, creator, or last editor.

- Search by plan name or tags (e.g., “Morning Peak”).

<figure class="blog-img-container">
  <img src="/img/projects/greenwave/10.png" class="blog-img-large" alt="img" loading="lazy" />
  <figcaption class="blog-img-caption">UI: Plan Design Section with mock data</figcaption>
</figure>

Clicking “View Details” brings up the associated time–distance diagram.

Creating a new plan opens a blank template.

<figure class="blog-img-container">
  <img src="/img/projects/greenwave/11.png" class="blog-img-large" alt="img" loading="lazy" />
  <figcaption class="blog-img-caption">UI: Plan Design Section Empty Page</figcaption>
</figure>

Once the user inputs the date/time range, the system automatically loads relevant intersection data. Below, users can fine-tune:

- **Road-level parameters**

total volume and average speeds per direction.

<figure class="blog-img-container">
  <img src="/img/projects/greenwave/road.png" class="blog-img-large" alt="img" loading="lazy" />
  <figcaption class="blog-img-caption">UI: road selected</figcaption>
</figure>

- **Edge-level parameters**

historical speeds, selectable for simulation.

<figure class="blog-img-container">
  <img src="/img/projects/greenwave/edge.png" class="blog-img-large" alt="img" loading="lazy" />
  <figcaption class="blog-img-caption">UI: edge selected</figcaption>
</figure>

- **Intersection-level parameters**

coordination points, phase offsets, cycle lengths, and signal splits.

<figure class="blog-img-container">
  <img src="/img/projects/greenwave/vertex.png" class="blog-img-large" alt="img" loading="lazy" />
  <figcaption class="blog-img-caption">UI: intersection selected</figcaption>
</figure>

All parameters are editable. There’s also a built-in “Smart Signal Split Optimizer” to assist users in configuring efficient greenwave bands.

## Scheduling Calendar

The calendar allows users to view or edit signal plan schedules by **day, week, or month**. Users can double-click a date/time slot to add or adjust plans, choosing from the existing plan library.

<figure class="blog-img-container">
  <img src="/img/projects/greenwave/month.png" class="blog-img-large" alt="img" loading="lazy" />
  <figcaption class="blog-img-caption">UI: Scheduling Calendar Month Mode</figcaption>
</figure>

<figure class="blog-img-container">
  <img src="/img/projects/greenwave/week.png" class="blog-img-large" alt="img" loading="lazy" />
  <figcaption class="blog-img-caption">UI: Scheduling Calendar Week Mode</figcaption>
</figure>

<figure class="blog-img-container">
  <img src="/img/projects/greenwave/day.png" class="blog-img-large" alt="img" loading="lazy" />
  <figcaption class="blog-img-caption">UI: Scheduling Calendar Day Mode</figcaption>
</figure>

<figure class="blog-img-container">
  <img src="/img/projects/greenwave/month.png" class="blog-img-large" alt="img" loading="lazy" />
  <figcaption class="blog-img-caption">UI: Scheduling Calendar Month Mode</figcaption>
</figure>

<figure class="blog-img-container">
  <img src="/img/projects/greenwave/modal.png" class="blog-img-large" alt="img" loading="lazy" />
  <figcaption class="blog-img-caption">UI: after double click, the existing plan library modal</figcaption>
</figure>

## Runtime Logs

This section extends the earlier daily comparison view. It lets users:

- View and compare **planned vs. actual signal plans** for any given day.

- Explore in-depth intersection and segment performance data.

<figure class="blog-img-container">
  <img src="/img/projects/greenwave/history-edge.png" class="blog-img-large" alt="img" loading="lazy" />
  <figcaption class="blog-img-caption">UI: Runtime Logs page, with edge selected</figcaption>
</figure>

Intersection Tab shows:

- Signal controller brand & ID

- District and jurisdiction

- All intersection phases

- Real-time and planned signal cycle lengths

- 24-hour breakdown of phase utilization (in percentage and duration)

Segment Tab provides historical speed and stop-rate trends throughout the day, visualized clearly for analysis and reporting.

<figure class="blog-img-container">
  <img src="/img/projects/greenwave/history-vertex.png" class="blog-img-large" alt="img" loading="lazy" />
  <figcaption class="blog-img-caption">UI: Runtime Logs page, with intersection selected</figcaption>
</figure>

This greenwave platform was not only a **massive system design effort**, but also a **deep dive into real urban traffic operations**. Designing for both front-line personnel and analysts required balancing **visual clarity, interaction logic, and functional scalability**. From high-level traffic strategy down to phase-level signal plans, this platform brought the entire greenwave ecosystem under one integrated UI.
