import React from 'react';

import imgTrend1 from '../../assets/google-trends-1.png';
import SearchAds from '../../assets/Search-ads.png';
import campaignOverview from '../../assets/campaign-overview-1.png';
import googleAdwordsFlowRecent from '../../assets/google-adwords-flow-recent.png';
import WhatSearch from '../../assets/what-is-search-ads.png';
import campaign1 from '../../assets/business-enmotion-800x236.png';
import campaign2 from '../../assets/display-what-is-Google-Adwords.png';
import shoppingad1 from '../../assets/shopping_ads_1.png';
import videoad1 from '../../assets/videoads-1.png';
import gAds from '../../assets/google-adwords.jpeg';
import campaign3 from '../../assets/almarai-800x225.png';
import universaladd from '../../assets/universal-app-ads.png'
import appcampaign from '../../assets/kcb-app-campaign-800x310.png'

class GoogleAdword extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <div className="google-adword">
            <header className="entry-header pt60 pb60">
               <div className="container">
                  <h1 className="entry-title pb-5 pt-5 text-center">What is Google AdWords?</h1>
               </div>
            </header>
            <br />
            <p>
               When I was first asked to run Google AdWords campaigns 4 years ago, I had the same question on my mind. It was my first job, and I had joined for a role in Market Research. Google Ads was a concept that seemed completely new.
            </p>
            <p>
               I know, I know…now it’s everywhere – digital marketing is taught as a course in MBA programs, there are multiple certification programs, several tutorials available for self-starters, and people are overall more informed about it as an advertising option, and as a lead generation channel.  But, that wasn’t the case then.
            </p>
            <p>
               <img src={gAds} alt="" className="trend1" />
            </p>
            <p>
               So, when I was asked to run these campaigns, I started doing some reading to get started. That’s when I realized that I have already seen and interacted with these ads for a long time, just that I didn’t think of them as ads. Anyway, long story short, that’s how I began, and have now run and experimented with all possible types of ads on Google AdWords.
            </p>
            <p>
               And, my intent of writing this guide is to help clueless beginners who are just getting started with AdWords. Because believe me, even after you have learned all the theory that you possibly can, you’ll still need several rounds of testing different things to get AdWords right – and even then, there’ll always be room for improvement.
            </p>
            <br />
            <h2><strong>The ever-growing popularity of Google AdWords</strong></h2>
            <p>
               Take a look at the trend for the term “what is Google AdWords” since 2004. It has continuously grown and would continue to grow as more and more businesses keep coming online.
            </p>
            <img src={imgTrend1} alt="" className="trend1" />
            <h2><strong>So, what is Google AdWords?</strong></h2>
            <p>
               To give you the dictionary definition, Google AdWords is an online advertising service developed by Google to help marketers reach their customers instantly.
            </p>
            <p>
               When someone searches on Google for a particular term, say ‘travel packages’, Google would throw a list of searches for you. But if you look closely, you will notice that the top and the bottom results are generally ads.
            </p>
            <p>
               <img src={SearchAds} alt="" className="trend1" />
            </p>
            <p>But how did Google know which ads to display?</p>
            <p><img src={googleAdwordsFlowRecent} alt="" className="trend1" /></p>
            <br />
            <p>Now that we have that sorted, let’s discuss the types of ads you can run using the Google AdWords platform.</p>
            <h2><strong>Type of ads in Google AdWords</strong>
            </h2>
            <img src={campaignOverview} alt="" width="900" height="998" className="flow-steps" />
            <p>
               <br />
               Now, let us look at each of these ad types in detail.</p>
            <h3><strong>A) Search ads</strong></h3>
            <p>Like my travel example earlier, when a user searches for something on Google, the list of ads that appear above the organic listing are called search ads.  For example, when a user searches for “Kashmir holiday packages”, the search results will look something like this.</p>
            <p>
               <img src={WhatSearch} alt="" className="trend2" />
            </p>
            <p>The ones marked “Ad” are ads.  And, the results below that are organic.</p>
            <p>Google considers many factors before deciding which ad to display first, as well as the sequence of ads that follow. We’ll discuss all these factors, their relative importance, the correlation between different factors etc. in a more detailed chapter later. But, let’s take a brief look at them:</p>
            <p><strong>Important factors in search ads</strong></p>
            <ol><li><strong>Targeting –</strong> For instance, your ads will be shown in the geography that you choose (you can go as specific as the ZIP code)</li><li><strong>Search term and keyword –&nbsp;</strong>What is being searched for by the user +&nbsp;the keyword that you optimize the ad for.</li><li><strong>Ad copy relevance</strong> – Ads that appear for a specific search term should be relevant. A search for colleges should not throw results for travel packages.</li><li><strong>Landing page experience –</strong> How relevant is the landing page to what the searcher wanted? Did he get what he was looking for?</li><li><strong>Conversion rate –</strong> This is again controlled by relevance, landing page quality, and experience.</li><li><strong>Bids – </strong>If 2 advertisers have perfect ads and landing pages, the higher bid will get preference over the lower one.</li><li><strong>Quality score:</strong> Quality score again depends on all of the other factors mentioned above. So, it’s more like a cycle than everything else.&nbsp;Everything is interrelated.</li></ol>
            <p><strong><em>In addition to the standard search ads, you can also run these&nbsp;special ads in search network.&nbsp;</em></strong></p>
            <ol><li><strong>Call-only ads</strong> – This ad is available&nbsp;only on call enabled mobile devices. After clicking the ad, instead of taking you to a&nbsp;landing page, you make a call directly.</li><li><strong>Dynamic ads</strong>– This ad type is more suitable for businesses who have a well-managed website. This is because the content of the ad as well as the landing pages is taken dynamically from the website. They are very similar to text ads, except that no keywords are involved here.&nbsp;<em>For example: a&nbsp;training institute is running dynamic search ads.</em> A user searches for “java courses”. Google displays a list of ads. But dynamic ads would automatically replace&nbsp;the ad headline with “java course” (the search query) and&nbsp;the ad text with the relevant&nbsp;website content and landing page”.</li><li><strong>Mobile app promotion-</strong>&nbsp;These ads are suitable for businesses with mobile applications. The goal of this ad is to encourage users to download your app or take a desired action within the&nbsp;app.</li></ol>
            <p><strong>Note:</strong>&nbsp;All these special ads are available on the search network. Except&nbsp;for call-only ads, others are available in display and video campaigns as well. The concepts are the same, but the platforms are different.</p>
            <p><strong>The ‘Business en Motion ‘ example:</strong></p>
            <p>Let me emphasize my point with an example from <a target="_blank" href="https://www.thinkwithgoogle.com/intl/en-ae/case-study/dubai-based-consultancy-business-en-motion-boosts-new-website-visitors-by-82-thanks-to-google-adwords/" target="_blank" rel="noopener noreferrer">ThinkWithGoogle.</a></p>
            <p>A Dubai-based consultancy called ‘<a target="_blank" href="http://businessenmotion.com/"><em>Business en motion</em></a>’ started running search ads to drive traffic to their website and to generate more leads.</p>
            <p>
               <img src={campaign1} alt="" className="trend1" />
            </p>
            <p>As you can see, search ads, when targeted and run properly can prove very profitable for your business, just like for business en motion.</p>
            <h3><strong>B) Display ads</strong></h3>
            <p>Have you ever noticed them? While you are reading a post or viewing a video on some random website, you see ads in a lot of different places on the page, and in different dimensions.&nbsp;These are display ads.</p>
            <p>
               <img src={campaign2} alt="" className="trend1" />
            </p>
            <p>
               Here the searcher is not explicitly looking for what is ad offers. But, based on a number of factors like keywords, audience interest, managed placements etc, Google decides to show them to you. These display ads only appear on advertising-supported websites.
            </p>
            <br />
            <p>
               Below are the targeting criteria, based on which Google selects the websites to place the banner ads.
            </p>
            <ol><li><strong>Keywords</strong> – The ads are displayed based on the keywords that they are optimized for. Let’s say the keyword for the ad is “Social Media Marketing”, then Google would choose websites that have content&nbsp;on the topic.</li><li><strong>Placements</strong> – Placements are nothing but the websites on which you want your ad to appear. Just add the websites where you want to show the ads, instead of keywords. For example, if you want to show your ads only on travel related websites, then look for advertising supported travel sites and add them to your targeting.</li><li><strong>Remarketing </strong>– This helps you reconnect with your existing website visitors. Using this, you can target visitors who have come to your website but have not taken any action.</li><li><strong>Topic</strong> – There are specific topics in AdWords, under which all websites are grouped. It will be easier for the advertisers to choose topics related to the businesses. For example, websites related to travel will be listed under the topic ‘travel.’</li></ol>
            <h3><strong>C)&nbsp;Shopping ads</strong></h3>
            <p>If you are a retailer, this campaign type would make more sense for you. This ad type boosts traffic to your website and helps in generating quality leads as well as increasing your conversions.</p>
            <br />
            <p>This is how shopping ads would appear on the search network.</p>
            <p>
               <img src={shoppingad1} alt="" className="trend1" />
            </p>
            <p><strong>Requirements for running shopping ads:</strong></p>
            <ol><li>Setup an account with Google Merchant Center (It is a platform that helps retailers to upload all their product listings in a&nbsp;<a target="_blank" href="https://support.google.com/merchants/answer/7052112?visit_id=1-636265315159879327-1541639900&amp;rd=1">specific format</a>).</li><li>Setup an account with Google AdWords &amp; link them together.</li><li>Submit updated product data every 30 days to Google Merchant Center.</li></ol>
            <p>Since both the tools are linked together, shopping ads take all the product details from Google Merchant Center, matches the search query and displays relevant ads to the user.</p>
            <h3><strong>D)&nbsp;Video ads</strong></h3>
            <p>This ad type lets advertisers run video ads on YouTube and other Google Display Networks.</p>
            <p><strong>The 3 main benefits of running video ads are:</strong></p>
            <ol><li><strong>Better targeting</strong> – This ad type has demographic, location, interest, keyword and device targeting which helps you reach the right audience on YouTube and Google Display Network.</li><li><strong>More reach</strong> –&nbsp;As of January 2017, YouTube is the 3<sup>rd</sup> most visited website and has 30 million visitors every day. Additionally, video ads are also available on Google Display Network. This means that you have access to a wider audience.</li><li><strong>Measurable&nbsp;</strong>– Unlike advertising on TV, YouTube ads let you know all the necessary metrics like views, view rate, clicks, reach and frequency, engagement, performance etc. &nbsp;This helps you measure the success of video ads.</li></ol>
            <p><strong>Example:</strong>&nbsp;video ad from Grammarly</p>
            <p>
               <img src={videoad1} alt="" className="trend1" />
            </p>
            <p><strong>The Almarai Example:</strong></p>
            <p>In order to understand the importance of running video ads on Youtube, <em>let me cite an example from <a target="_blank" href="https://www.almarai.com/en/">Almarai</a> who is into the&nbsp;dairy farming industry.&nbsp;</em></p>
            <p>
               <img src={campaign3} alt="" className="trend1" />
            </p>
            <h3><strong>E)&nbsp;Universal app campaign</strong></h3>
            <p>This campaign is helpful for businesses with&nbsp;a mobile app. Here, the advertiser can promote the mobile app across search, PlayStore, Display &amp; YouTube.&nbsp;AdWords&nbsp;uses ad text ideas and other assets right from your app store listings.&nbsp;All you need to do is provide some text, a budget. and a starting bid.&nbsp;Also, don’t forget to set languages and locations for the ad.</p>
            <p>
               By utilizing all this information, AdWords itself designs a variety of ads in different formats. Google will automatically test different ad combinations and display the one that performs the best.
            </p>
            <p>
               <img src={universaladd} alt="" className="trend1" />
            </p>
            <p>Financial institution, KCB group, used Universal App Campaign to increase awareness about KCB mobile banking app.</p>
            <p>
               <img src={appcampaign} alt="" className="trend1" />
            </p>
            <h2><strong>Conclusion:</strong></h2>
            <p>So,&nbsp;now you know what Google AdWords is, and the types of ads that are available for you to run. My&nbsp;next chapter will give you solid reasons to start with Google ads right away and to improve your ROI using them.</p>
         </div>
      );
   }
}

export default GoogleAdword;