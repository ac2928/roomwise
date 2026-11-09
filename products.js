// products.js
// This file holds the FAKE product data for the store.
// Every page loads this file so it can show products.
// Each product has: id, name, room, price, image, and description.
// "image" is the path to the product's picture inside the images folder.
// To use a different picture, put the new file in the images folder
// and change the path here (or just save it with the same file name).

const products = [
  { id: 1,  name: "Smart Coffee Maker",     room: "kitchen",     price: 89.99,  image: "images/coffee-maker.jpg",         description: "Start brewing from your phone before you even get out of bed." },
  { id: 2,  name: "Wi-Fi Kitchen Scale",    room: "kitchen",     price: 34.99,  image: "images/kitchen-scale.jpg",        description: "Weighs ingredients and sends the numbers straight to your recipe app." },
  { id: 3,  name: "Smart Fridge Camera",    room: "kitchen",     price: 49.99,  image: "images/fridge-camera.jpg",        description: "Peek inside your fridge from the grocery store." },
  { id: 4,  name: "Voice Assistant Speaker",room: "living room", price: 59.99,  image: "images/voice-speaker.jpg",        description: "Play music, set timers, and control your other devices by voice." },
  { id: 5,  name: "Color Smart Bulb (2-pack)", room: "living room", price: 24.99, image: "images/smart-bulb.jpg",         description: "Change brightness and color with an app or a schedule." },
  { id: 6,  name: "Smart TV Remote Hub",    room: "living room", price: 39.99,  image: "images/tv-remote-hub.jpg",        description: "One remote for your TV, sound bar, and streaming box." },
  { id: 7,  name: "Sunrise Alarm Clock",    room: "bedroom",     price: 44.99,  image: "images/sunrise-alarm.jpg",        description: "Wakes you up gently with light that slowly gets brighter." },
  { id: 8,  name: "Smart Thermostat",       room: "bedroom",     price: 129.99, image: "images/thermostat.jpg",           description: "Keeps your room at the perfect temperature for sleeping." },
  { id: 9,  name: "Sleep Tracker Pad",      room: "bedroom",     price: 69.99,  image: "images/sleep-tracker.jpg",        description: "Slides under your mattress and tracks how well you sleep." },
  { id: 10, name: "Video Doorbell",         room: "outdoor",     price: 99.99,  image: "images/video-doorbell.jpg",       description: "See and talk to whoever is at your door from anywhere." },
  { id: 11, name: "Smart Sprinkler Controller", room: "outdoor", price: 79.99,  image: "images/sprinkler-controller.jpg", description: "Waters your lawn based on the weather forecast." },
  { id: 12, name: "Motion Floodlight",      room: "outdoor",     price: 64.99,  image: "images/motion-floodlight.jpg",    description: "Turns on automatically when someone walks by at night." }
];

// Helper: find one product by its id number.
function findProduct(id) {
  return products.find(function (p) { return p.id === id; });
}
