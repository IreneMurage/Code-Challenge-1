# Code-Challenge-1

A collection of three JavaScript-based mini projects that solve practical, everyday problems relevant to Kenyan users. Each folder in this project contains a standalone script that performs a specific calculation, such as estimating ingredients for Kenyan chai, calculating boda boda fare, or estimating mobile transaction fees.

## Contributor
- Irene Murage

## Project Structure


Each folder contains a JavaScript file with a complete solution to the respective challenge.

---

## Challenges Overview

### 1. Chai Calculator (`chaiCalculator/chai.js`)
- **Purpose:** Calculates the basic ingredients needed to make a given number of cups of Kenyan chai.
- **Input:** Takes `numberOfCups` (as a number) as an argument.
- **Output:** Prints the required amount of:
  - Water
  - Milk
  - Tea leaves
  - Sugar  
  in a clear, readable format to the console.

---

### 2. Boda Fare Calculator (`bodaFareCalculator/fare.js`)
- **Purpose:** Estimates the fare for a boda boda ride based on trip distance.
- **Input:**
  - Prompts the user to enter the trip distance in kilometers.
  - Takes `distanceInKm` (as a number) as an argument.
- **Output:** Calculates and prints the total fare using:


- The result is printed to the console in a user-friendly format.

---

### 3. Mobile Money Estimator (`mobileMoneyEstimator/fee.js`)
- **Purpose:** Calculates estimated transaction fees for a mobile money transfer.
- **Input:** Accepts amount and optionally transaction type/network.
- **Output:** Prints estimated transaction fees to the console.

---

## In the Browser Console
- Open the browser developer tools.

- Paste the contents of the desired .js file into the console and hit Enter.

- Each script runs independently and requires no additional setup.

## License 
- This project is licensed under the MIT License — feel free to use, modify, and share.
##  How to Run

You can run the scripts in two ways:


### 1. Using Node.js
``` bash 
node chaiCalculator/chai.js
node bodaFareCalculator/fare.js
node mobileMoneyEstimator/fee.js
