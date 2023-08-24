import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CoinTableHeader from './CoinTableHeader';
import CoinTableRow from './CoinTableRow';
import axios from "axios";
import api from "../api/portfolios";

function Analysis() {

  const [analysisCoins, setAnalysisCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [noCoins, setNoCoins] = useState(false);
  const [coinData, setCoinData] = useState([]);
  const [nameSortOrder, setNameSortOrder] = useState(null);
  const [marketCapSortOrder, setMarketCapSortOrder] = useState(null);
  const [volumeSortOrder, setVolumeSortOrder] = useState(null);
  const [USD1YRSortOrder, setUSD1YRSortOrder] = useState(null);
  const [BTC1YRSortOrder, setBTC1YRSortOrder] = useState(null);
  const [BTC1YrPriceSortOrder, setBTC1YrPriceSortOrder] = useState(null);
  const [inPriceChangeSortOrder, setInPriceChangeSortOrder] = useState(null);
  const [threeMonthsChangeSortOrder, setThreeMonthsChangeSortOrder] = useState(null);
  const [maxGradeSortOrder, setMaxGradeSortOrder] = useState(null);
  const [futurePredSortOrder, setFuturePredSortOrder] = useState(null);
  const [avgGainPredSortOrder, setAvgGainPredSortOrder] = useState(null);
  const [allTimeHighSortOrder, setAllTimeHighSortOrder] = useState(null);
  const [twitterSortOrder, setTwitterSortOrder] = useState(null);
  const [gitSourceSortOrder, setGitSourceSortOrder] = useState(null);
  const [coinRatingSortOrder, setCoinRatingSortOrder] = useState(null);
  const [buySellSortOrder, setBuySellSortOrder] = useState(null);
  const [gainPrediction, setGainPrediction] = useState(0);
  const [avgGainPrediction, setAvgGainPrediction] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [totalScore, setTotalScore] = useState(0);
  const [highestPrice, setHighestPrice] = useState(null);
  const [inputDisabled, setInputDisabled] = useState(false);

  function handleSortByName() {
    setNameSortOrder(nameSortOrder === "asc" ? "desc" : "asc");
    setMarketCapSortOrder(null);
    setVolumeSortOrder(null);
    setUSD1YRSortOrder(null);
    setBTC1YRSortOrder(null);
    setBTC1YrPriceSortOrder(null);
    setInPriceChangeSortOrder(null);
    setMaxGradeSortOrder(null);
    setFuturePredSortOrder(null);
    setAvgGainPredSortOrder(null);
    setAllTimeHighSortOrder(null);
    setBuySellSortOrder(null)
    setCoinRatingSortOrder(null)
    setGitSourceSortOrder(null)
    setTwitterSortOrder(null)
  };

  function handleSortByMarketCap() {
    setMarketCapSortOrder(marketCapSortOrder === "asc" ? "desc" : "asc");
    setVolumeSortOrder(null);
    setUSD1YRSortOrder(null);
    setBTC1YRSortOrder(null);
    setBTC1YrPriceSortOrder(null);
    setInPriceChangeSortOrder(null);
    setMaxGradeSortOrder(null);
    setFuturePredSortOrder(null);
    setAvgGainPredSortOrder(null);
    setAllTimeHighSortOrder(null);
    setBuySellSortOrder(null)
    setCoinRatingSortOrder(null)
    setGitSourceSortOrder(null)
    setTwitterSortOrder(null)
  };

  function handleSortByVolume() {
    setVolumeSortOrder(volumeSortOrder === "asc" ? "desc" : "asc");
    setMarketCapSortOrder(null);
    setUSD1YRSortOrder(null)
    setBTC1YRSortOrder(null);
    setBTC1YrPriceSortOrder(null);
    setInPriceChangeSortOrder(null);
    setMaxGradeSortOrder(null);
    setFuturePredSortOrder(null);
    setAvgGainPredSortOrder(null);
    setAllTimeHighSortOrder(null);
    setBuySellSortOrder(null)
    setCoinRatingSortOrder(null)
    setGitSourceSortOrder(null)
    setTwitterSortOrder(null)
  };  


  
  function handleSortByUSD1YR() {
    setUSD1YRSortOrder(USD1YRSortOrder === "asc" ? "desc" : "asc");
    setMarketCapSortOrder(null);
    setVolumeSortOrder(null);
    setBTC1YRSortOrder(null);
    setBTC1YrPriceSortOrder(null);
    setInPriceChangeSortOrder(null);
    setMaxGradeSortOrder(null);
    setFuturePredSortOrder(null);
    setAvgGainPredSortOrder(null);
    setAllTimeHighSortOrder(null);
    setBuySellSortOrder(null)
    setCoinRatingSortOrder(null)
    setGitSourceSortOrder(null)
    setTwitterSortOrder(null)
  }

 

  function handleSortByBTC1YR() {
    setBTC1YRSortOrder(BTC1YRSortOrder === "asc" ? "desc" : "asc");
    setMarketCapSortOrder(null);
    setVolumeSortOrder(null);
    setUSD1YRSortOrder(null)
    setBTC1YrPriceSortOrder(null);
    setInPriceChangeSortOrder(null);
    setMaxGradeSortOrder(null);
    setFuturePredSortOrder(null);
    setAvgGainPredSortOrder(null);
    setAllTimeHighSortOrder(null);
    setBuySellSortOrder(null)
    setCoinRatingSortOrder(null)
    setGitSourceSortOrder(null)
    setTwitterSortOrder(null)
  };  

  function handleSortByBTC1YrPrice () {
     setBTC1YrPriceSortOrder(BTC1YrPriceSortOrder === "asc" ? "desc" : "asc");
    setMarketCapSortOrder(null);
    setVolumeSortOrder(null);
    setUSD1YRSortOrder(null)
    setBTC1YRSortOrder(null);
    setInPriceChangeSortOrder(null);
    setMaxGradeSortOrder(null);
    setFuturePredSortOrder(null);
    setAvgGainPredSortOrder(null);
    setAllTimeHighSortOrder(null);
    setBuySellSortOrder(null)
    setCoinRatingSortOrder(null)
    setGitSourceSortOrder(null)
    setTwitterSortOrder(null)
  };  

 

  function handleSortByInPriceChange() {
    setInPriceChangeSortOrder(inPriceChangeSortOrder === "asc" ? "desc" : "asc");
   setMarketCapSortOrder(null);
   setVolumeSortOrder(null);
   setUSD1YRSortOrder(null)
   setBTC1YRSortOrder(null);
   setBTC1YrPriceSortOrder(null);
   setMaxGradeSortOrder(null);
   setFuturePredSortOrder(null);
   setAvgGainPredSortOrder(null);
   setAllTimeHighSortOrder(null);
   setBuySellSortOrder(null)
   setCoinRatingSortOrder(null)
   setGitSourceSortOrder(null)
   setTwitterSortOrder(null)
  };  


  function handleSortByThreeMonthChange() {
    setThreeMonthsChangeSortOrder(threeMonthsChangeSortOrder === "asc" ? "desc" : "asc");
    setMarketCapSortOrder(null);
    setVolumeSortOrder(null);
    setUSD1YRSortOrder(null)
    setBTC1YRSortOrder(null);
    setBTC1YrPriceSortOrder(null);
    setInPriceChangeSortOrder(null);
    setMaxGradeSortOrder(null);
    setFuturePredSortOrder(null);
    setAvgGainPredSortOrder(null);
    setAllTimeHighSortOrder(null);
    setBuySellSortOrder(null)
    setCoinRatingSortOrder(null)
    setGitSourceSortOrder(null)
    setTwitterSortOrder(null)
  };  


  function handleSortByMaxGrade() {
    setMaxGradeSortOrder(maxGradeSortOrder === "asc" ? "desc" : "asc");
    setMarketCapSortOrder(null);
    setVolumeSortOrder(null);
    setUSD1YRSortOrder(null)
    setBTC1YRSortOrder(null);
    setBTC1YrPriceSortOrder(null);
    setInPriceChangeSortOrder(null);
    setThreeMonthsChangeSortOrder(null);
    setFuturePredSortOrder(null);
    setAvgGainPredSortOrder(null);
    setAllTimeHighSortOrder(null);
    setBuySellSortOrder(null)
    setCoinRatingSortOrder(null)
    setGitSourceSortOrder(null)
    setTwitterSortOrder(null)
  };  



  function handleSortFutureGain() {
    setFuturePredSortOrder(futurePredSortOrder === "asc" ? "desc" : "asc");
    setMaxGradeSortOrder(null);
    setMarketCapSortOrder(null);
    setVolumeSortOrder(null);
    setUSD1YRSortOrder(null)
    setBTC1YRSortOrder(null);
    setBTC1YrPriceSortOrder(null);
    setInPriceChangeSortOrder(null);
    setThreeMonthsChangeSortOrder(null);
    setAvgGainPredSortOrder(null);
    setAllTimeHighSortOrder(null);
    setBuySellSortOrder(null)
    setCoinRatingSortOrder(null)
    setGitSourceSortOrder(null)
    setTwitterSortOrder(null)
  };

  
  function handleAvgFutureGain() {
    setAvgGainPredSortOrder(avgGainPredSortOrder === "asc" ? "desc" : "asc");
    setFuturePredSortOrder(null);
    setMaxGradeSortOrder(null);
    setMarketCapSortOrder(null);
    setVolumeSortOrder(null);
    setUSD1YRSortOrder(null)
    setBTC1YRSortOrder(null);
    setBTC1YrPriceSortOrder(null);
    setInPriceChangeSortOrder(null);
    setThreeMonthsChangeSortOrder(null);
    setAllTimeHighSortOrder(null);
    setBuySellSortOrder(null)
    setCoinRatingSortOrder(null)
    setGitSourceSortOrder(null)
    setTwitterSortOrder(null)
  };

  function handleAllTimeHigh() {
    setAllTimeHighSortOrder(allTimeHighSortOrder === "asc" ? "desc" : "asc");
    setFuturePredSortOrder(null);
    setMaxGradeSortOrder(null);
    setMarketCapSortOrder(null);
    setVolumeSortOrder(null);
    setUSD1YRSortOrder(null)
    setBTC1YRSortOrder(null);
    setBTC1YrPriceSortOrder(null);
    setInPriceChangeSortOrder(null);
    setThreeMonthsChangeSortOrder(null);
    setAvgGainPredSortOrder(null)
    setBuySellSortOrder(null)
    setCoinRatingSortOrder(null)
    setGitSourceSortOrder(null)
    setTwitterSortOrder(null)
  };

  function handleSortTwitter() {
    setTwitterSortOrder(twitterSortOrder === "asc" ? "desc" : "asc");
    setMaxGradeSortOrder(null);
    setMarketCapSortOrder(null);
    setVolumeSortOrder(null);
    setUSD1YRSortOrder(null)
    setBTC1YRSortOrder(null);
    setBTC1YrPriceSortOrder(null);
    setInPriceChangeSortOrder(null);
    setThreeMonthsChangeSortOrder(null);
    setFuturePredSortOrder(null);
    setAvgGainPredSortOrder(null);
    setAllTimeHighSortOrder(null);
    setBuySellSortOrder(null)
    setCoinRatingSortOrder(null)
    setGitSourceSortOrder(null)
  };  


  function handleSortGitSource() {
   setGitSourceSortOrder(gitSourceSortOrder === "asc" ? "desc" : "asc");
    setFuturePredSortOrder(null);
    setMaxGradeSortOrder(null);
    setMarketCapSortOrder(null);
    setVolumeSortOrder(null);
    setUSD1YRSortOrder(null)
    setBTC1YRSortOrder(null);
    setBTC1YrPriceSortOrder(null);
    setInPriceChangeSortOrder(null);
    setThreeMonthsChangeSortOrder(null);
    setAvgGainPredSortOrder(null);
    setAllTimeHighSortOrder(null);
    setBuySellSortOrder(null)
    setCoinRatingSortOrder(null)
    setTwitterSortOrder(null)
  };
  
  function handleCoinRating() {
    setCoinRatingSortOrder(coinRatingSortOrder === "asc" ? "desc" : "asc");
    setAvgGainPredSortOrder(null);
    setFuturePredSortOrder(null);
    setMaxGradeSortOrder(null);
    setMarketCapSortOrder(null);
    setVolumeSortOrder(null);
    setUSD1YRSortOrder(null)
    setBTC1YRSortOrder(null);
    setBTC1YrPriceSortOrder(null);
    setInPriceChangeSortOrder(null);
    setThreeMonthsChangeSortOrder(null);
    setAllTimeHighSortOrder(null);
    setBuySellSortOrder(null)
    setGitSourceSortOrder(null)
    setTwitterSortOrder(null)
  };

  function handleBuySell() {
    setBuySellSortOrder(buySellSortOrder === "asc" ? "desc" : "asc");
    setAllTimeHighSortOrder(null);
    setFuturePredSortOrder(null);
    setMaxGradeSortOrder(null);
    setMarketCapSortOrder(null);
    setVolumeSortOrder(null);
    setUSD1YRSortOrder(null)
    setBTC1YRSortOrder(null);
    setBTC1YrPriceSortOrder(null);
    setInPriceChangeSortOrder(null);
    setThreeMonthsChangeSortOrder(null);
    setAvgGainPredSortOrder(null)
    setCoinRatingSortOrder(null)
    setGitSourceSortOrder(null)
    setTwitterSortOrder(null)
  };

 
    const sortedCoins = coinData
    ? coinData.slice().sort((a, b) => {
      const marketCapA = parseInt(a.marketCap.replace(/,/g, ''));
      const marketCapB = parseInt(b.marketCap.replace(/,/g, ''));
      const volumeA = parseInt(a.volume.replace(/,/g, ''));
      const volumeB = parseInt(b.volume.replace(/,/g, ''));
      const oneYearA = parseFloat(a.oneYearPercentChange.replace(/,/g, ''));
      const oneYearB = parseFloat(b.oneYearPercentChange.replace(/,/g, '')); 
      const btcOneYearA = parseFloat(a.oneYearBTCPercentChange.replace(/,/g, ''));
      const btcOneYearB = parseFloat(b.oneYearBTCPercentChange.replace(/,/g, ''));   
      const btcOneYearPriceA = parseFloat(a.oneYearBTCPriceChange.replace(/,/g, ''));
      const btcOneYearPriceB = parseFloat(b.oneYearBTCPriceChange.replace(/,/g, ''));   
      const inceptionPriceChangeA = parseFloat(a.inceptionPriceChange.replace(/,/g, ''));
      const inceptionPriceChangeB = parseFloat(b.inceptionPriceChange.replace(/,/g, '')); 
      const ninetyDaysPercentChangeA = parseFloat(a.ninetyDaysPercentChange.replace(/,/g, ''));
      const ninetyDaysPercentChangeB = parseFloat(b.ninetyDaysPercentChange.replace(/,/g, ''));
      const highestPricePercentageA = parseFloat(a.highestPricePercentage.replace(/,/g, ''));
      const highestPricePercentageB = parseFloat(b.highestPricePercentage.replace(/,/g, ''));  
      const twitterFollowersA = a.twitterFollowers;
      const twitterFollowersB = b.twitterFollowers;   
      const gitRepositoryA = a.gitRepository;
      const gitRepositoryB = b.gitRepository;
      const ratingA = a.rating 
      const ratingB = b.rating;
      const buysellA = a.buysell;
      const buysellB =  b.buysell;  
      const maxGradeA = a.maxChartGrade;
      const maxGradeB = b.maxChartGrade;
      const nameA = a.name;
      const nameB = b.name;
      let gainPredictionA = 0;
      let gainPredictionB = 0;
      let avgGainPredictionA = 0;
      let avgGainPredictionB = 0;

      if (a.gainPrediction !== '-' && a.gainPrediction  !== null && a.gainPrediction > 0 ) {
        gainPredictionA = parseFloat(a.gainPrediction.replace(/,/g, ''));
        avgGainPredictionA = parseFloat(a.avgGainPrediction.replace(/,/g, ''));
      } else {
        gainPredictionA = 0;
        avgGainPredictionA = 0;
      }
      
      if (b.gainPrediction !== '-' && b.gainPrediction !== null && b.gainPrediction > 0 ) {
        gainPredictionB = parseFloat(b.gainPrediction.replace(/,/g, ''));
        avgGainPredictionB = parseFloat(b.avgGainPrediction.replace(/,/g, ''));
      } else {
        gainPredictionB = 0;
        avgGainPredictionB = 0;
      }
  
      
      if (marketCapSortOrder === "asc") {
        return marketCapA - marketCapB;
      } else if (marketCapSortOrder === "desc") {
        return marketCapB - marketCapA;
      } else if (volumeSortOrder === "asc") {
        return volumeA - volumeB;
      } else if (volumeSortOrder === "desc") {
        return volumeB - volumeA;
      } else if (USD1YRSortOrder === "asc") {
          return oneYearA - oneYearB;
      } else if (USD1YRSortOrder === "desc") {
          return oneYearB - oneYearA;
      } else if (BTC1YRSortOrder === "asc") {
            return btcOneYearA - btcOneYearB;
      } else if (BTC1YRSortOrder === "desc") {
            return btcOneYearB - btcOneYearA;
      } else if (BTC1YrPriceSortOrder === "asc") {
            return btcOneYearPriceA - btcOneYearPriceB;
      } else if (BTC1YrPriceSortOrder === "desc") {
            return btcOneYearPriceB - btcOneYearPriceA;
      } else if (inPriceChangeSortOrder === "asc") {
            return inceptionPriceChangeA - inceptionPriceChangeB;
      } else if (inPriceChangeSortOrder === "desc") {
            return inceptionPriceChangeB - inceptionPriceChangeA;
      } else if (threeMonthsChangeSortOrder === "asc") {
            return ninetyDaysPercentChangeA - ninetyDaysPercentChangeB;
      } else if (threeMonthsChangeSortOrder === "desc") {
            return ninetyDaysPercentChangeB - ninetyDaysPercentChangeA;
      } else if (maxGradeSortOrder === "asc") {
            return maxGradeA.localeCompare(maxGradeB);
      } else if (maxGradeSortOrder === "desc") {
            return maxGradeB.localeCompare(maxGradeA);
      } else if (futurePredSortOrder === "asc") {
            return gainPredictionA - gainPredictionB;
      } else if (futurePredSortOrder === "desc") {
            return gainPredictionB - gainPredictionA;
      } else if (avgGainPredSortOrder === "asc") {
            return avgGainPredictionA - avgGainPredictionB;
      } else if (avgGainPredSortOrder === "desc") {
            return avgGainPredictionB - avgGainPredictionA;
      } else if (allTimeHighSortOrder === "asc") {
            return highestPricePercentageA - highestPricePercentageB;
      } else if (allTimeHighSortOrder === "desc") {
            return highestPricePercentageB - highestPricePercentageA;
      } else if (twitterSortOrder === "asc") {
            return twitterFollowersA - twitterFollowersB;
      } else if (twitterSortOrder === "desc") {
            return twitterFollowersB - twitterFollowersA;
      } else if (gitSourceSortOrder === "asc") {
             return gitRepositoryA.localeCompare(gitRepositoryB);
      } else if (gitSourceSortOrder === "desc") {
            return gitRepositoryB.localeCompare(gitRepositoryA);
      } else if (coinRatingSortOrder === "asc") {
            return ratingA - ratingB;
      } else if (coinRatingSortOrder === "desc") {
            return ratingB - ratingA;
      } else if (buySellSortOrder === "asc") {
            return buysellA.localeCompare(buysellB);
      } else if (buySellSortOrder === "desc") {
            return buysellB.localeCompare(buysellA);
      } else if (nameSortOrder === "asc") {
            return nameA.localeCompare(nameB);
      } else if (nameSortOrder === "desc") {
            return nameB.localeCompare(nameA);
      } else {
            return 0;
      }
    }) : [];

  
  function handleInputChange(event, coinId, buysellrating, newGainPrediction, newAvgGainPrediction) {
    
    setInputValue(event);

    console.log("newGainPrediction: "+newGainPrediction);
    console.log("newAvgGainPrediction: "+newAvgGainPrediction);

    console.log("Object.values in input change"+Object.values(coinData.find(coin => coin.id === coinId))[3])

        // Check if the new input value is the opposite of the previous input value
        if (inputValue !== !Object.values(coinData.find(coin => coin.id === coinId))[3]) {
          let newGainPredictionScore = 0;
          let newAvgGainPredictionScore = 0;
    
          // Calculate new rating with updated scores
          if ( parseInt(newGainPrediction) > 3 ) {
            newGainPredictionScore = 2;
          } 
          if ( parseInt(newAvgGainPrediction) > 3 ) {
            newAvgGainPredictionScore = 1;
          } 
          
          const rating = buysellrating - newGainPredictionScore - newAvgGainPredictionScore;


          console.log("buysellrating: "+buysellrating);
          console.log("newGainPredictionScore: "+newGainPredictionScore);
          console.log("newAvgGainPredictionScore: "+newAvgGainPredictionScore);
          console.log("rating: "+rating);
    
          const updatedCoinData = Object.values(coinData).map((coin) => {
            if (Object.values(coin)[0] === coinId) {
              return {
                ...coin,
                buysellrating: rating,
                gainPrediction: 0,
                avgGainPrediction: 0,
              };
            }
            return coin;
          });
    
          setCoinData(updatedCoinData);

        } else {

          console.log("inputValue: " + Object.values(inputValue));


          console.log("coinData inputValue: " + coinData);
          const updatedCoinData = Object.values(coinData).map((coin) => {
            console.log("coin input: " + coin.id);
            console.log("inputValue: " + inputValue);
      
            if (Object.values(coin)[0] === coinId) {
              return {
                ...coin,
                prediction: inputValue,
              };
            }
            return coin;
          });
      
          setCoinData(updatedCoinData);

        }
        
  };


  function handleCoinPrediction(
    inputValue,
    current_price,
    coinId,
    oneYearPercentChange,
    buysellrating,
    buysell,
    ninetyDaysPercentChange
  ) {

     let newGainPredictionScore = 0;
    let newAvgGainPredictionScore = 0;
    let newGainPrediction  = null
    let newAvgGainPrediction = null;
    let totalrating = null;
 
    if (inputValue === !inputValue) {
       inputValue = 0;
       newGainPrediction = parseFloat(
        (inputValue - current_price) / current_price
      );   
    } else {
      newGainPrediction = parseFloat(
        (inputValue - current_price) / current_price
      );

    }
      
    console.log("newGainPrediction: " + newGainPrediction);


    if (oneYearPercentChange === 0) {
      newAvgGainPrediction = parseFloat((newGainPrediction + 0) / 2);
    } else {
      newAvgGainPrediction = parseFloat(
        (newGainPrediction + parseFloat(oneYearPercentChange) / 100) / 2
      );
    }  
      
    if (inputValue === !inputValue) {
      newGainPredictionScore = 0;
      newAvgGainPredictionScore = 0;

      console.log("input is empty");
      console.log("gainPrediction: " + gainPrediction);
      console.log("avgGainPrediction: " + avgGainPrediction);    

    } else {

      console.log("before buysellrating: " + buysellrating);
      console.log("before buysell: " + buysell);
      console.log("newGainPrediction: " + newGainPrediction);
      console.log("newAvgGainPrediction: " + newAvgGainPrediction);
      console.log("input is not empty");

      if ( newGainPrediction > 0.0300 ) {
        newGainPredictionScore = 2;
      } 
      if ( newAvgGainPrediction > 0.0300 ) {
        newAvgGainPredictionScore = 1;
      } 

     totalrating = buysellrating + newGainPredictionScore + newAvgGainPredictionScore;

     console.log("buysell: " + buysell);
     console.log("new buysellrating: " + totalrating);
     console.log("ninetyDaysPercentChange: " + parseInt(ninetyDaysPercentChange));

 
      if(buysell === 'BUY' && totalrating > 2 && parseInt(ninetyDaysPercentChange) < 40){  
      
        buysell = "BUY"; 

      }  else if(buysell === null && totalrating > 3 && parseInt(ninetyDaysPercentChange) < 40){  

        buysell = "BUY"; 

      } else if(buysell === 'SELL' && totalrating < 4 && parseInt(ninetyDaysPercentChange) > 50){  
      
        buysell = "SELL"; 

      } else if(buysell === 'HODL' && totalrating > 2 && parseInt(ninetyDaysPercentChange) < 40){  
      
        buysell = "BUY"; 

      } else if(buysell === 'HODL' && totalrating > 4  && parseInt(ninetyDaysPercentChange) > 50){  
    
        buysell = "BUY"; 

      } else {

        buysell = "HODL"; 

      }

   console.log("after buysell: " + buysell);
    console.log("newGainPredictionScore: " + newGainPredictionScore);
    console.log("newAvgGainPredictionScore: " + newAvgGainPredictionScore);  

    }

    const updatedCoinData = Object.values(coinData).map((coin) => {
      console.log("coin: " + coin.id);

      if (Object.values(coin)[0] === coinId) {
        return {
          ...coin,
          gainPrediction: newGainPrediction.toLocaleString(undefined, {
            style: "percent",
          }),
          avgGainPrediction: newAvgGainPrediction.toLocaleString(undefined, {
            style: "percent",
          }),
          prediction: inputValue,
          buysellrating: totalrating,
          buysell: buysell
        };
      }
      return coin;
    });

    setCoinData(updatedCoinData);
    
  };

  useEffect(() => {
    GetAnalysisCoins();
  }, []);


  async function GetAnalysisCoins() {

    try {

          const portfolios = await api.get("http://localhost:3006/portfolios");

          let allAnalysisCoins = [];
          
          for (let i = 0; i < portfolios.data.length; i++) {
            const response = await api.get(
              `http://localhost:3006/portfolios/${portfolios.data[i].id}`
            );
            let analysisCoins = response.data.analysis;

            for (let [index, value] of Object.entries(analysisCoins)) {
              let coinNameAnalysis = value.coinName;
              let coinIdAnalysis = value.coinId;

              console.log("coinNameAnalysis: " + coinNameAnalysis);   
              
              allAnalysisCoins.push({
                coinName: coinNameAnalysis,
                coinId: coinIdAnalysis,
              });
              console.log("analysisCoins.length: " + analysisCoins.length);
            }
          }

          console.log("allAnalysisCoins after loop: " + allAnalysisCoins);
          setAnalysisCoins(allAnalysisCoins);

          let allAnalysisCoinsArray = Object.keys(allAnalysisCoins);
          console.log("allAnalysisCoinsArray length: " + allAnalysisCoinsArray);


          if (allAnalysisCoinsArray.length === 0) {    

            setIsLoading(false);
            setNoCoins(true);

          } else {

            setNoCoins(false);
            setIsLoading(true);

            const allCoinNames = [];
            const allCoinIds = [];

            for (let a = 0; a < allAnalysisCoinsArray.length; a++) {
              console.log(
                "analysisCoins[a].coinName " + allAnalysisCoins[a].coinName
              );
              console.log("allAnalysisCoins[a].coinId " + allAnalysisCoins[a].coinId);
              allCoinNames.push(allAnalysisCoins[a].coinName);
              allCoinIds.push(allAnalysisCoins[a].coinId);
            }
            let allCoinNamesjoin = allCoinNames.join(",");
            let allCoinIdsjoin = allCoinIds.join(",");

            console.log("allCoinNamesjoin: " + allCoinNamesjoin);
            console.log("allCoinIdsjoin: " + allCoinIdsjoin);

            let allCoinNamesArray = Object.keys(allCoinNames);
            console.log("allCoinNamesArray length: " + allCoinNamesArray);

            if (allCoinNamesArray.length !== 0) {

              const marketChartData = await axios.get(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${allCoinNamesjoin}&price_change_percentage=30d%2C200d%2C1y`
              );

                console.log("market chart data: ", marketChartData.data)

              const cache = {}; // initialize an empty cache object

              
              // function to fetch data from API
              async function fetchData(coinName) {
                if (cache[coinName]) {
                  // check if the data for the coin already exists in the cache
                  return cache[coinName]; // return the cached data
                } else {
                  const response = await axios.get(
                    `https://api.coingecko.com/api/v3/coins/${coinName}/market_chart?vs_currency=usd&days=max`
                  );
                  const data = response.data;
                  cache[coinName] = data; // store the data in the cache
                  return data; // return the API response
                }
              }
              const coinDataCache = {}; // Create a cache object to store coin data

              const historicalDataPromises = marketChartData.data.map((coinData) => {
                console.log("coinData.id: " + coinData.id);

                // Check if the coin data is already in the cache
                if (coinDataCache[coinData.id]) {
                  // If the data is in the cache, return a resolved promise with the cached data
                  return Promise.resolve(coinDataCache[coinData.id]);
                } else if (localStorage.getItem(coinData.id)) {
                  // If the data is in the local storage, parse and return the data
                  const data = JSON.parse(localStorage.getItem(coinData.id));
                  coinDataCache[coinData.id] = data;
                  return data;
                } else {
                  // If the data is not in the cache or local storage, make an API request to fetch it
                  return fetchData(coinData.id).then((data) => {
                    // Store the data in the cache and local storage
                    coinDataCache[coinData.id] = data;
                    localStorage.setItem(coinData.id, JSON.stringify(data));
                    return data;
                  });
                }
              });

              const historicalData = await Promise.all(historicalDataPromises);      

              let now = new Date();
              const ninetyDaysAgo = new Date(now - 90 * 24 * 60 * 60 * 1000);
              const ninetyDaysAgoTimestamp = Math.floor(ninetyDaysAgo - 1 / 1000);
              const ninetyDaysAgoDate = new Date(ninetyDaysAgoTimestamp);
              const ninetyDaysAgoDay = ninetyDaysAgoDate.getDate().toString();
              const ninetyDaysAgoMonth = ninetyDaysAgoDate.getMonth() + 1;
              const ninetyDaysAgoYear = ninetyDaysAgoDate.getFullYear();

              let coinData = [];

              for (let [index, value] of Object.entries(marketChartData.data)) {



                console.log("value: "+value);
                
                let volumeScore = 0;
                let oneYearPercentScore = 0;
                let btcChangeScore = 0;
                let btcPercentScore = 0;
                let inceptionPercentScore = 0;
                let threeMonthsPercentScore = 0;
                let maxGradeScore = 0;
                let twitterScore = 0;
                let gitScore = 0;
                let highPercentScore = 0;

                const market_chart_prices = historicalData[index].prices;

                const highestPrice = market_chart_prices.reduce((prev, curr) => (prev[1] > curr[1] ? prev : curr));
                setHighestPrice(highestPrice[1]);
        
                console.log(value.id+" market_cap: "+value.market_cap)     
                console.log(value.id+" highest price: "+highestPrice[1])         

                let HighPrice = highestPrice[1];
                let highestPricePercentage = parseFloat((value.current_price - HighPrice) /  HighPrice);


                let ninetyDaysAgoPrice = null;
                for (let i = 0; i < market_chart_prices.length; i++) {
                  const ninetyDayArrayTimestamp = market_chart_prices[i][0];
                  const ninetyDayArrayPrice = market_chart_prices[i][1];
                  const ninetyDaysAgoArrayDate = new Date(ninetyDayArrayTimestamp);
                  const ninetyDaysAgoArrayDay = ninetyDaysAgoArrayDate
                    .getDate()
                    .toString();
                  const ninetyDaysAgoArrayMonth =
                    ninetyDaysAgoArrayDate.getMonth() + 1;
                  const ninetyDaysAgoArrayYear = ninetyDaysAgoArrayDate.getFullYear();

                  if (
                    ninetyDaysAgoArrayDay === ninetyDaysAgoDay &&
                    ninetyDaysAgoArrayMonth === ninetyDaysAgoMonth &&
                    ninetyDaysAgoArrayYear === ninetyDaysAgoYear
                  ) {
                    ninetyDaysAgoPrice = ninetyDayArrayPrice;
                    break;
                  }
                }


                let coinId = null;

                for (let i = 0; i < allAnalysisCoins.length; i++) {

                  coinId = allAnalysisCoins.find(
                    (coin) => coin.coinName === value.id
                  )?.coinId;

                }

                console.log(coinId+" getCurrentBtcPrice");

                let getCurrentBtcPrice = await axios.get(
                  `https://min-api.cryptocompare.com/data/price?fsym=${coinId}&tsyms=BTC&api_key=de528b65cdbb62a301a3bbd68201919b928595d750ce18281f45ad59ee77bdfa`
                );      
                let currentBtcPrice = null;    


                if(getCurrentBtcPrice.data === undefined){         

                  getCurrentBtcPrice = await axios.get(`https://data.messari.io/api/v2/assets/${coinId}/metrics`);              

                  currentBtcPrice = getCurrentBtcPrice.data.market_data.price_btc;
                  

                } else {

                  currentBtcPrice = getCurrentBtcPrice.data.BTC;           

                }

                let getYearAgoBtcPrice = await axios.get(
                  `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${coinId}&tsym=BTC&limit=365&api_key=de528b65cdbb62a301a3bbd68201919b928595d750ce18281f45ad59ee77bdfa`
                );
               
                let yearAgoBtcPrice = null;   
                let getYearAgoBtcPriceValues = getYearAgoBtcPrice.data.Data.Data;


                if (getYearAgoBtcPriceValues !== undefined) {
                  yearAgoBtcPrice = getYearAgoBtcPrice.data.Data.Data[0].close;
                } else {  
                  const endDate = new Date().toISOString().split('T')[0]; // Today's date
                  const startDate = new Date(); // Current date/time
                  startDate.setDate(startDate.getDate() - 365); // Subtract 365 days
                  const startDateFormatted = startDate.toISOString().split('T')[0]; // Formatted start date
                
                    const response = await axios.get(
                      `https://data.messari.io/api/v1/assets/${coinId}/metrics/price/time-series?start=${startDateFormatted}&end=${endDate}`
                    );

                    // Assuming the API response contains an array of price data points, retrieve the first entry 
                    console.log(coinId+" response.data.data.values: "+response.data.data.values);           

                    if(response.data.data.values !== null ) {
                      const priceData = response.data.data.values[0];                
                      yearAgoBtcPrice = priceData[1];
                    } else {
                      yearAgoBtcPrice = 0;
                    }              
                    
                    console.log(coinId+" new yearAgoBtcPrice: "+yearAgoBtcPrice);

                }
                
                console.log(coinId+" currentBtcPrice: "+currentBtcPrice);
                console.log(coinId+" yearAgoBtcPrice: "+yearAgoBtcPrice);

                let oneYearBTCPercentChange = null;
                let oneYearBTCPriceChange = null;

                if (yearAgoBtcPrice === null || yearAgoBtcPrice === 0) {
                  oneYearBTCPercentChange = 0;
                  oneYearBTCPriceChange = parseFloat(currentBtcPrice) - 0;
                  oneYearBTCPriceChange = oneYearBTCPriceChange.toFixed(10);
                  if (oneYearBTCPriceChange > 0.0000001) {
                    btcChangeScore = 1;
                  } else {
                    btcChangeScore = 0;
                  }
                  btcPercentScore = 0;
                } else {
                  oneYearBTCPercentChange =
                    (currentBtcPrice - yearAgoBtcPrice) / yearAgoBtcPrice;
                  oneYearBTCPriceChange = parseFloat(currentBtcPrice) - parseFloat(yearAgoBtcPrice);
                  oneYearBTCPriceChange = oneYearBTCPriceChange.toFixed(10);
                  if (oneYearBTCPriceChange > 0.0000001) {
                    btcChangeScore = 1;
                  }
                  if (oneYearBTCPercentChange > 0.2) {
                    btcPercentScore = 2;
                  }
                }
                console.log(coinId+" oneYearBTCPriceChange: "+oneYearBTCPriceChange);
                console.log(coinId+" oneYearBTCPercentChange: "+oneYearBTCPercentChange);       
                  

                const earliestTimestamp = market_chart_prices[2][0]; // timestamp of the first recorded price
                const earliestDate = new Date(earliestTimestamp); // convert timestamp to Date object
                let startyear = earliestDate.getFullYear();
                let startday = earliestDate.getDate();
                let startmonth = earliestDate.getMonth() + 2;

                
                console.log("includes startmonth no parse: " + startmonth);

                if ([2, 4, 6, 9, 10, 11].includes(startmonth)) {
                  if (startday >= 30) {
                    startday = 28;
                  }
                } else if ([1, 3, 5, 7, 8, 10, 12].includes(startmonth)) {
                  if (startday > 28) {
                    startday = 1;
                  }
                } else if (startmonth > 12) {
                  startmonth = startmonth - 12;
                  startyear = earliestDate.getFullYear() + 1;
                
                }

                startday = startday.length < 2 ? "0" + startday : startday;
                startmonth =
                  startmonth.toString().length < 2 ? "0" + startmonth : startmonth;

                console.log("first startmonth: " + startmonth);   

                let coincache = {};
                let inceptionDate = startday + "-" + startmonth + "-" + startyear;
                let cacheKey = `${value.id}_${inceptionDate}`;
                let startDateCoinData = null;

                console.log(
                  value.id +
                    " first coinData pass: " +
                    "https://api.coingecko.com/api/v3/coins/" +
                    value.id +
                    "/history?date=" +
                    inceptionDate
                );

                if (coincache[cacheKey]) {
                  // Use cached data
                  startDateCoinData = coincache[cacheKey];

                }  else if (localStorage.getItem(cacheKey)) {    
                  
                  startDateCoinData = JSON.parse(localStorage.getItem(cacheKey));                     
                  coincache[cacheKey] = JSON.stringify(startDateCoinData);            
                
                } else {
                  // Fetch data from API
                  startDateCoinData = await axios.get(
                    `https://api.coingecko.com/api/v3/coins/${value.id}/history?date=${inceptionDate}`
                  );
                  
                }
                
                let coinDataPass = startDateCoinData?.data?.market_data?.current_price?.usd;

                console.log(
                  value.id + " first coinDataPass is stopping here for: " + coinDataPass
                );

                if (coinDataPass === undefined) {

                  startmonth = earliestDate.getMonth() + 6;

                  console.log(" 2nd startmonth: " + startmonth);

                  if ([2, 4, 6, 9, 10, 11].includes(startmonth)) {
                    console.log("startmonth 1: " + startmonth);
                    if (startday >= 30) {
                      startday = 28;
                    }
                  } else if ([1, 3, 5, 7, 8, 10, 12].includes(startmonth)) {
                    console.log("startmonth 2: " + startmonth);
                    if (startday > 28) {
                      startday = 1;
                    }
                  } else if (startmonth > 12) {
                    startmonth = startmonth - 12;
                    startyear = earliestDate.getFullYear() + 1;
                    console.log("startmonth 3: " + startmonth);
                  }

                  startday = startday.length < 2 ? "0" + startday : startday;
                  startmonth =
                    startmonth.toString().length < 2 ? "0" + startmonth : startmonth;

                  console.log("2nd startmonth: " + startmonth);

                  let inceptionDate = startday + "-" + startmonth + "-" + startyear;

                  if (coincache[cacheKey]) {
                  // Use cached data
                  startDateCoinData = coincache[cacheKey];
                  
                  }  else if (localStorage.getItem(cacheKey)) {    
                    
                    startDateCoinData = JSON.parse(localStorage.getItem(cacheKey));                     
                    coincache[cacheKey] = JSON.stringify(startDateCoinData);            
                  
                  } else {
                    // Fetch data from API
                    startDateCoinData = await axios.get(
                      `https://api.coingecko.com/api/v3/coins/${value.id}/history?date=${inceptionDate}`
                    );
                    
                  }

                  coinDataPass = startDateCoinData?.data?.market_data?.current_price?.usd;

                  if (coinDataPass === undefined) {

                    const todaysDate = new Date();
                    const currentMonth = todaysDate.getMonth();
                    const currentYearNow = todaysDate.getFullYear();

                    startmonth = parseInt(earliestDate.getMonth() + 12);

                    console.log(" includes 3rd startmonth: " + startmonth);
      
                    if ([2, 4, 6, 9, 10, 11].includes(startmonth)) {
                      console.log("startmonth 1: " + startmonth);
                      if (startday >= 30) {
                        startday = 28;
                      }
                    } else if ([1, 3, 5, 7, 8, 10, 12].includes(startmonth)) {
                      console.log("startmonth 2: " + startmonth);
                      if (startday > 28) {
                        startday = 1;
                      }
                    } else if (startmonth > 12) {
                      startmonth = startmonth - 12;
                      startyear = earliestDate.getFullYear() + 1;
                  
                      if(startyear === currentYearNow + 1){     

                        startyear = currentYearNow;
                        startmonth = currentMonth;

                        console.log("1 Working for Future Year: " + startyear);
                        console.log("1 Month: " + currentMonth);                  
                        console.log("1 Year: " + currentYearNow);

                      }

                  }

                    startday = startday.length < 2 ? "0" + startday : startday;
                    startmonth =
                      startmonth.toString().length < 2
                        ? "0" + startmonth
                        : startmonth;

                    let inceptionDate = startday + "-" + startmonth + "-" + startyear;      

                    if (coincache[cacheKey]) {
                      // Use cached data
                      startDateCoinData = coincache[cacheKey];
                      
                    }  else if (localStorage.getItem(cacheKey)) {    
                      
                      startDateCoinData = JSON.parse(localStorage.getItem(cacheKey));                     
                      coincache[cacheKey] = JSON.stringify(startDateCoinData);            
                    
                    } else {
                      // Fetch data from API
                      startDateCoinData = await axios.get(
                        `https://api.coingecko.com/api/v3/coins/${value.id}/history?date=${inceptionDate}`
                      );
                      
                    }

                  } else {
                    // Store data in cache and local storage
                    coincache[cacheKey] = JSON.stringify(startDateCoinData);
                    localStorage.setItem(cacheKey, JSON.stringify(startDateCoinData));
                  }            
                  

                  coinDataPass = startDateCoinData?.data?.market_data?.current_price?.usd;


                  if (coinDataPass === undefined) {         
                    
                    const todaysDate = new Date();
                    const currentMonth = todaysDate.getMonth();
                    const currentYearNow = todaysDate.getFullYear();

                    startmonth = parseInt(startmonth);
                    
                    console.log(" includes startmonth: " + startmonth);


                    if ([2, 4, 6, 9, 10, 11].includes(startmonth)) {
                      console.log("startmonth 1: " + startmonth);
                      if (startday >= 30) {
                        startday = 28;
                      }
                    } else if ([1, 3, 5, 7, 8, 10].includes(startmonth)) {
                      console.log("startmonth 2: " + startmonth);
                      if (startday > 28) {
                        startday = 1;
                      }
                    } else if (startmonth >= 12) {
                      startmonth = startmonth - 12;
                      startyear = earliestDate.getFullYear() + 1;

                      console.log("startmonth 3: " + startmonth);
                      console.log("Year: " + currentYearNow);

                      if(startyear === currentYearNow + 1){     

                        startyear = currentYearNow;
                        startmonth = currentMonth + 1;

                        console.log("2 Working for Future Year: " + startyear);
                        console.log("2 Month: " + currentMonth);    
                        console.log("2 Year: " + currentYearNow);

                      }

                  }

                    startday = startday.length < 2 ? "0" + startday : startday;
                    startmonth = startmonth.toString().length < 2 ? "0" + startmonth : startmonth;

                        console.log("final year: " + startday);
                    console.log("final startmonth: " + startmonth);
                    console.log("final year: " + startyear);



                    let inceptionDate = startday + "-" + startmonth + "-" + startyear;    
                    
                    console.log(
                      value.id +
                        " is stopping here for last fetch: " +
                        "https://api.coingecko.com/api/v3/coins/" +
                        value.id +
                        "/history?date=" +
                        inceptionDate
                    );

                    if (coincache[cacheKey]) {
                      // Use cached data
                      startDateCoinData = coincache[cacheKey];
                      
                    }  else if (localStorage.getItem(cacheKey)) {    
                      
                      startDateCoinData = JSON.parse(localStorage.getItem(cacheKey));                     
                      coincache[cacheKey] = JSON.stringify(startDateCoinData);            
                    
                    } else if(inceptionDate !== undefined) {
                      // Fetch data from API
                      startDateCoinData = await axios.get(
                        `https://api.coingecko.com/api/v3/coins/${value.id}/history?date=${inceptionDate}`
                      );
                      
                    }

                  }  else {
                    // Store data in cache
                    coincache[cacheKey] = startDateCoinData;
                    localStorage.setItem(cacheKey, JSON.stringify(startDateCoinData));
                  }

                } else {
                  // Store data in cache
                  coincache[cacheKey] = startDateCoinData;
                  localStorage.setItem(cacheKey, JSON.stringify(startDateCoinData));
                }
          
                console.log("startDateCoinData.data.market_data.current_price.usd: ", startDateCoinData)

                let inceptionPriceChange =
                  (value.current_price -
                    startDateCoinData.data.market_data.current_price.usd) /
                  startDateCoinData.data.market_data.current_price.usd;          

                if (inceptionPriceChange > 0.3) {
                  inceptionPercentScore = 2;
                  console.log("inceptionPercentScore: " + inceptionPercentScore);
                } else {
                  inceptionPercentScore = 0;
                  console.log("inceptionPercentScore: " + inceptionPercentScore);
                }

                let maxChartGrade = null;

                console.log(value.id+" inceptionPriceChange: " + inceptionPriceChange);

                if (parseFloat(inceptionPriceChange) >= 2.0) {
                  console.log(value.id+" A : "+parseFloat(inceptionPriceChange))
                  maxChartGrade = "A";
                  maxGradeScore = 2;
                  console.log("maxGradeScore: " + maxGradeScore);
                } else if (parseFloat(inceptionPriceChange) >= 1.0 && parseFloat(inceptionPriceChange) < 2.0) {
                  console.log(value.id+" B : "+parseFloat(inceptionPriceChange))
                  maxChartGrade = "B";
                  maxGradeScore = 2;
                  console.log("maxGradeScore: " + maxGradeScore);
                } else if (parseFloat(inceptionPriceChange) < 1.0 && parseFloat(inceptionPriceChange) > 0.15) {
                  console.log(value.id+" C : "+parseFloat(inceptionPriceChange))
                  maxChartGrade = "C";
                  maxGradeScore = 1;
                  console.log("maxGradeScore: " + maxGradeScore);
                } else {
                  console.log(value.id+" D : "+parseFloat(inceptionPriceChange))
                  maxChartGrade = "D";
                  maxGradeScore = 0;
                  console.log("maxGradeScore: " + maxGradeScore);
                }

                let oneYearPercentChange = value.price_change_percentage_1y_in_currency / 100;

                console.log(coinId+" oneYearPercentChange: " + oneYearPercentChange);

                if (oneYearPercentChange === null) {
                  oneYearPercentChange = 0;
                  oneYearPercentScore = 0;
                  console.log("oneYearPercentScore: " + oneYearPercentScore);
                } else {  
                    if (oneYearPercentChange > .2) {
                      oneYearPercentScore = 2;
                      console.log("oneYearPercentScore: " + oneYearPercentScore);
                    } else {
                      oneYearPercentScore = 0;
                    }
                }

                let ninetyDaysPercentChange = null;

                if(ninetyDaysAgoPrice !== null){

                  ninetyDaysPercentChange =
                  (value.current_price - ninetyDaysAgoPrice) / ninetyDaysAgoPrice;

                } else {

                  ninetyDaysPercentChange =
                  (value.current_price - startDateCoinData.data.market_data.current_price.usd) / startDateCoinData.data.market_data.current_price.usd;

                }

                  console.log(value.id+" value.current_price: " + value.current_price);
                  console.log(value.id+" ninetyDaysAgoPrice: " + ninetyDaysAgoPrice);
                  console.log(value.id+" ninetyDaysPercentChange: " + ninetyDaysPercentChange);



                  

                if (ninetyDaysPercentChange > 0.14) {
                  threeMonthsPercentScore = 1;
                  console.log("threeMonthsPercentScore: " + threeMonthsPercentScore);
                } else {
                  threeMonthsPercentScore = 0;
                  console.log("threeMonthsPercentScore: " + threeMonthsPercentScore);
                }

                console.log(coinId+" coinid getCoinData: ",coinId);


                let getCoinData = await api.get(
                  `https://data-api.cryptocompare.com/asset/v1/data/by/symbol?asset_symbol=${coinId}&api_key=de528b65cdbb62a301a3bbd68201919b928595d750ce18281f45ad59ee77bdfa`
                );

                
                console.log(coinId+" data getCoinData: ",getCoinData);

                if(getCoinData.data){

                let twitter = getCoinData.data.Data.TWITTER_ACCOUNTS;
                let twitterArray = [];
                let twitterURL = null;
                let twitterFollowers = null;
                let sourceCode = getCoinData.data.Data.CODE_REPOSITORIES;
                let gitRepository = null;
                let website = getCoinData.data.Data.WEBSITE_URL;

                

                if (twitter !== null) {
                  twitter = Object.values(twitter);
                  twitterArray = twitter.map((account) => account.FOLLOWERS);
                  
                  twitterURL = twitter.map(
                    (accounts) => accounts.URL            
                  );  

                  if(twitterURL.length > 1){
                    console.log(coinId+" twitter URL[0]: " + twitterURL[0]); 
                    twitterURL = twitterURL[0];
                  }
                  twitterFollowers = twitterArray.reduce((acc, val) => acc + val);            

                  if (twitterFollowers > 25000) {
                    twitterScore = 1;              
                  }
                } else {
                  twitterFollowers = 0;
                  twitterScore = 0;          
                }

                if (sourceCode !== null && sourceCode !== undefined && sourceCode.length !== 0) {
                  gitRepository = sourceCode[0].URL;
                  gitScore = 1;
                  
                } else {
                  gitRepository = "N/A";
                  gitScore = 0;
                
                }

                if (website === null) {
                  website = "N/A";
                }
              

                if (value.total_volume > 250000) {
                  volumeScore = 1;
                }    


                console.log("value.id: " + value.id);
                let total =
                volumeScore +
                oneYearPercentScore +
                btcChangeScore +
                btcPercentScore +
                inceptionPercentScore +
                threeMonthsPercentScore +
                maxGradeScore +
                twitterScore +
                gitScore; 

                let buysellrating = 0;
                let buyHighPercentScore = 0;
                let sellHighPercentScore = 0;
                let buyrating = 0;
                let sellrating = 0;
                let buysell = null;

                if(total > 3 ){

                  buyrating = 1; 
                  sellrating = 0;

                } else {

                  sellrating = 1; 
                  buyrating = 0;

                }            

                if(highestPricePercentage <= -0.75 ){   

                  buyHighPercentScore = 2; 
                  sellHighPercentScore = 0;     

                } else if(highestPricePercentage >= -0.55 ){
                  
                  sellHighPercentScore = 2;  
                  buyHighPercentScore = 0;

                }    
                  
                  
                  let totalbuyrating = buyrating + buyHighPercentScore;

                  let totalsellrating = sellrating + sellHighPercentScore;

                  if(totalbuyrating > totalsellrating) {

                      buysellrating = totalbuyrating;             

                      if(buysellrating > 2 && ninetyDaysPercentChange < 0.40){
                        buysell = "BUY";
                      }  else {
                        buysell = "HODL";  
                      }                 
                    

                  } else if(totalsellrating > totalbuyrating) {

                      buysellrating = totalsellrating;

                      if(buysellrating > 3 && ninetyDaysPercentChange > 0.50){
                        buysell = "SELL";
                      } else {
                        buysell = "HODL";  
                      }  

                  } 

                setTotalScore(total);

              


                coinData.push({
                  id: value.id,
                  name: value.name,
                  current_price: value.current_price,
                  marketCap: value.market_cap.toLocaleString("en-US"),
                  volume: value.total_volume.toLocaleString("en-US"),
                  oneYearPercentChange: oneYearPercentChange.toLocaleString(
                    undefined, {  minimumFractionDigits: 4, 
                                  style: "percent" 
                              }
                    ),
                  oneYearBTCPercentChange: oneYearBTCPercentChange.toLocaleString(
                    undefined,
                    { style: "percent" }
                  ),
                  oneYearBTCPriceChange: oneYearBTCPriceChange.toLocaleString(
                    "en-US",
                    { minimumFractionDigits: 10 }
                  ),
                  inceptionPriceChange: inceptionPriceChange.toLocaleString(
                    undefined,
                    { style: "percent" }
                  ),
                  ninetyDaysPercentChange: ninetyDaysPercentChange.toLocaleString(
                    undefined,
                    { style: "percent" }
                  ),
                  maxChartGrade: maxChartGrade,
                  gainPrediction: null,
                  avgGainPrediction: null,
                  highestPricePercentage: highestPricePercentage.toLocaleString(
                    undefined,
                    { style: "percent" }
                  ),
                  twitterFollowers: twitterFollowers,
                  twitterURL: twitterURL,
                  gitRepository: gitRepository,
                  website: website,
                  prediction: inputValue,
                  rating: total,
                  buysellrating: buysellrating,
                  buysell: buysell
                });

                setCoinData(coinData);           


              }

            }

        } else {

            setIsLoading(false);
            console.log("Error retrieving coin data");       

      } 
    }

  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.log("API returned a 404 response. Error code:", error.response.status);
      // You can also access other information from the error.response object if needed.
      setIsLoading(false);
      
     } else {
      console.log("An error occurred:", error.message);
    }
  }

};

  async function removeAllCoinsHandler() {

    const portfolios = await api.get("http://localhost:3006/portfolios");

    for (let i = 0; i < portfolios.data.length; i++) {

      const portfolio = await api.get(
        `http://localhost:3006/portfolios/${portfolios.data[i].id}`
      );

      // Remove each coin's data from browser storage
      for (let j = 0; j < portfolio.data.analysis.length; j++) {
        let coinName = portfolio.data.analysis[j].coinName;
        localStorage.removeItem(coinName);
      }
  
      // set the analysis array to an empty array
      portfolio.data.analysis = [];
  
      // update the portfolio with the new analysis array
      await api.patch(
        `http://localhost:3006/portfolios/${portfolios.data[i].id}`,
        { analysis: portfolio.data.analysis }
      );
  
      const updatedPortfolio = await api.get(
        `http://localhost:3006/portfolios/${portfolios.data[i].id}`
      );


      // set the analysisCoins state to the empty array
      setAnalysisCoins([]);
    }
  
    // call the function to fetch the updated analysis coins
    GetAnalysisCoins();

  }

  async function removeCoinHandler(coinName) {
    // your logic to delete the analysis coin from the API

    const portfolios = await api.get("http://localhost:3006/portfolios");

    for (let i = 0; i < portfolios.data.length; i++) {
      const portfolio = await api.get(
        `http://localhost:3006/portfolios/${portfolios.data[i].id}`
      );

      console.log(portfolios.data[i].id);

      for (let c = 0; c < portfolio.data.analysis.length; c++) {
        console.log(coinName);
        if (coinName === "binancecoin") {
          coinName = coinName.replace("binancecoin", "binance-coin");
        }

        if (portfolio.data.analysis[c].coinName === coinName) {
          console.log("remove coinName: " + coinName);
          console.log(portfolio.data.analysis[c].coinName);

          const coinIndex = portfolio.data.analysis.findIndex(
            (coin) => coin.coinName === coinName
          );

          console.log(coinIndex);
          if (coinIndex === -1) {
            throw new Error(
              `Analysis Coin with id ${coinName} could not found in portfolio with id ${portfolios.data[i].id}`
            );
          }

          // remove the coin from the portfolio's coins array
          portfolio.data.analysis.splice(coinIndex, 1);

          // update the portfolio with the new coins array---
          await api.patch(
            `http://localhost:3006/portfolios/${portfolios.data[i].id}`,
            { analysis: portfolio.data.analysis }
          );

          const updatedPortfolio = await api.get(
            `http://localhost:3006/portfolios/${portfolios.data[i].id}`
          );
            
          // remove the corresponding key-value pair from the browser's storage
          localStorage.removeItem(coinName);
      
          // set the analysisCoins state to the updated analysis array
          setAnalysisCoins(updatedPortfolio.data.analysis);

          GetAnalysisCoins();
        }
      }
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (noCoins) return <div>Add some coins to analyze!</div>;

  return (
    <div className="analysis-main">
      <div className="app-main">
        <div className="ui coin-analysis">
          <div className="ui relaxed divided list">
          <CoinTableHeader
              handleSortByName={handleSortByName}
              handleSortByMarketCap={handleSortByMarketCap}
              handleSortByVolume={handleSortByVolume}
              handleSortByUSD1YR={handleSortByUSD1YR}
              handleSortByBTC1YR={handleSortByBTC1YR}
              handleSortByInPriceChange={handleSortByInPriceChange}
              handleCoinRating={handleCoinRating}
              handleBuySell={handleBuySell}
              handleAvgFutureGain={handleAvgFutureGain}
              handleSortTwitter={handleSortTwitter}
              handleSortByBTC1YrPrice={handleSortByBTC1YrPrice}
              handleSortByThreeMonthChange={handleSortByThreeMonthChange}
              handleSortByMaxGrade={handleSortByMaxGrade}
              handleSortFutureGain={handleSortFutureGain}
              handleAllTimeHigh={handleAllTimeHigh}
              handleSortGitSource={handleSortGitSource}              
              nameSortOrder={nameSortOrder}
              marketCapSortOrder={marketCapSortOrder}
              volumeSortOrder={volumeSortOrder}
              USD1YRSortOrder={USD1YRSortOrder}
              BTC1YRSortOrder={BTC1YRSortOrder}
              BTC1YrPriceSortOrder={BTC1YrPriceSortOrder}
              inPriceChangeSortOrder={inPriceChangeSortOrder}
              threeMonthsChangeSortOrder={threeMonthsChangeSortOrder}
              maxGradeSortOrder={maxGradeSortOrder}
              futurePredSortOrder={futurePredSortOrder}
              avgGainPredSortOrder={avgGainPredSortOrder}
              allTimeHighSortOrder={allTimeHighSortOrder}
              twitterSortOrder={twitterSortOrder}
              gitSourceSortOrder={gitSourceSortOrder}
              coinRatingSortOrder={coinRatingSortOrder}
              buySellSortOrder={buySellSortOrder}
            />
            {              
              sortedCoins.map((coin) => (
              
                <CoinTableRow 
                coin={coin} 
                handleInputChange={handleInputChange}
                handleCoinPrediction={handleCoinPrediction}
                removeCoinHandler={removeCoinHandler} 
                inputValue={inputValue}             

                />
            ))}
          </div>
        </div>
        <button
              className="ui red basic button"
              onClick={() => removeAllCoinsHandler()}
          >
              Delete All
        </button>
      </div>
    </div>
  );
}

export default Analysis;