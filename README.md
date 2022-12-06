# <img align="left" src="static/images/baseball.png" alt="baseball" width="35"/> &nbsp; Baseball Salary Analysis
# Overview
We set out to see if we could predict what a baseball hitter's salary was based on their statistics and if there were certain statistics that were better predictors of pay. After analyzing the data and running various machine learning algorithms, we collected our findings and [published them here](https://anyren.github.io/baseball_salary_analysis/).

### Contributers (Group 6)
* William Vann
* Sarah Stoffel
* Ilia Phiranishvili
* Amanda Nyren

<img  src="static/images/site.png" alt="baseball" width="1000"/>

# Process

## Source Data
* Hitters Salaries (2.12 MB): https://www.kaggle.com/datasets/andrewdecker/hitters-salary-adjusted-to-inflation

## Data Cleanup/Processing
Dataset was cleaned to remove duplicates and outliers. We then reduced the data by removing rows for the first three years of each player's career and aggregated the remaining stats. Finally, we took the natural logarithm of the adjusted salaries.

## Creating ML models
We ran the following analysis:
* Multivariate regression:
    * LinearRegression()
    * GradientBoostingRegressor()
    * RandomForestRegressor()
    * smf.ols()
* Classifiers:
    * KMeans
    * KNN 
    * RandomForest 
    * ExtraTrees 
    * Support Vector Machine(SVM)
    * Use tsne to visualize the clusters

## Analysis
The results of our models and analysis can be found on our [site](https://anyren.github.io/baseball_salary_analysis/).

## Website
The website was created using Bootstrap and HTML/CSS. There is a map on the visualization page that uses Leaflet and D3 to style and display the data. The site is hosted on Github Pages.

# Instructions
Our code was written in Python version 3.8 and requires the following packages:

* matplotlib
* numpy
* pandas
* seaborn
* scikit-learn
* statsmodels

To run, clone this repo and open a jupyter notebook server from the root location. All code for analysis is in the `Notebooks` directory. 

