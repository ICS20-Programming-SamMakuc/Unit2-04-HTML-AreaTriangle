// Created by: Sam Makuc
// Created on: March 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates area and perimeter of triangle.
 */
function calculate () {
  // input
  let base = parseInt(document.getElementById('base-of-triangle').value);
  let height = parseInt(document.getElementById('height-of-triangle').value);

  // process
  let area = (base * height) / 2;

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}
