# Oyloe-Inventory-Management-frontend
Native mobile app designed to help remote oilfield employees track inventory more accurately and efficiently

## Table of Contents
* [About](#about)
* [Intro Video](#intro-video)
* [App Features](#app-features)
* [Coming Soon](#coming-soon)
* [Tech Stack](#tech-stack)
* [Contact](#contact)
* [License](#license)

## About
I have worked in the oilfield as a drilling fluids engineer for 9+ years. Every location I have worked has been remote and the climate is often 
extreme (North Dakota in the winter). Inventory management is one of the more unpleasant tasks to do in sub zero weather. I would have to go around location 
and count all products on location daily with a pen and paper. I would then have to bring that inventory count back to a computer to input it into a daily report. 
This was tedious, repetitive, and error prone. The Oyloe Inventory Management system allows workers to input daily inventory counts directly through an app on their
smart phone or tablet. This eliminates potential errors from transferring counts from a tally book to a computer for report purposes. Now the reports can be 
generated directly on the device. OIMS also allows incoming product deliveries to be added through the app so that all inventory management processes are controlled in one convenient location. 

Backend repository: https://github.com/boyloe/

## Intro Video
Check out the [Oyloe Inventory Management System](demo link) demo!

## App Features
### Login to Account
User account will be generated by company IT department for security purposes. On login screen, users are directed to input their username and password to be
given access to their site's inventory information. Clicking the login button will direct user to the app home screen where they can create new delivery tickets or input their daily inventory.

![Login Screen Video gif](https://media.giphy.com/media/xUYRyAj1UvoTNazFrP/giphy.gif)

### Start a New Delivery Ticket
User can click on "Input New Delivery" to create a new ticket when products are delivered to location. This will bring them to a ticket generator where they can add
the delivered products with the quantity and it will populate the new ticket with their products. Once all products have been added, the ticket can be submitted by clicking "Submit Delivery Ticket". This will return the user the Home screen.

![Create Delivery Ticket gif](https://media.giphy.com/media/IlABEFlc5xMWpZvIgN/giphy.gif)

### Input Daily Inventory
User can click on "Input Daily Inventory" to load the inventory screen. On this screen, all products currently on location will be listed with their name, a short description of the product, and the quantity from the previous day. User can input inventory quantities on each product card to update the current quantity available on location. Once all product quantity changes have been entered, user can hit "Submit Daily Inventory" to submit inventory changes. 

![Input Daily Inventory Video gif](https://media.giphy.com/media/fFump5Og2U4tfSb2Cy/giphy.gif)

##Challenges
Implementing Typescript for the first time was difficult. I had to develop custom data types for all of the product info that was being fetched from my back end. 



