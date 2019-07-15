import React from 'react';
import ScrollableAnchor, { goToAnchor } from 'react-scrollable-anchor'

class DigitalMarketing extends React.Component {
   constructor(props) {
      super(props);
      this.gotToSection = this.gotToSection.bind(this);
   }
   gotToSection(sectionname) {
      goToAnchor(sectionname);
   }
   render() {
      return (
         <div className="digital-marketing hsg-rich-text">
            <header className="entry-header pt60 pb60">
               <div className="container">
                  <h1 className="entry-title pb-5 pt-5 text-center">What Is Digital Marketing?</h1>
               </div>
            </header>
            <br />
            <p>With how accessible the internet is today, would you believe me if I told you the number of people who go online every day is still increasing?</p>
            <p>It is. In fact, "constant" internet usage among adults increased by 5% in just the last three years, according to Pew Research. And although we say it a lot, the way people shop and buy really has changed along with it -- meaning offline marketing isn't as effective as it used to be.</p>
            <p>Marketing has always been about connecting with your audience in the right place and at the right time. Today, that means you need to meet them where they are already spending time: on the internet.</p>
            <p>Enter digital marketing -- in other words, any form of marketing that exists online.</p>
            <p> we talk a lot about inbound marketing as a really effective way to attract, engage, and delight customers online. But we still get a lot of questions from people all around the world about digital marketing. So, we decided to answer them. Click the links below to jump to each question, or keep reading to see how digital marketing is carries out today.</p>
            <ul className="got-to-sections">
               <li><span onClick={() => this.gotToSection('whatis')}>What is digital marketing?</span></li>
               <li><span href="#examples">Digital Marketing Examples</span></li>
               <li><span href="#marketer">What does a digital marketer do?</span></li>
               <li><span href="#versus">Inbound Marketing vs. Digital Marketing: Which is it?</span></li>
               <li><span href="#doesitwork">Does digital marketing work for all businesses?</span></li>
               <li><span href="#roleof">What is the role of digital marketing to a company?</span></li>
               <li><span href="#typesof">What types of digital content should I create?</span></li>
               <li><span href="#howlong">How long will it take to see results from my content?</span></li>
               <li><span href="#budget">Do I need a big budget for digital marketing?</span></li>
               <li><span href="#mobile">How does mobile marketing fit into my digital marketing strategy?</span></li>
               <li><span href="#nowwhat">I'm ready to try digital marketing. Now what?</span></li>
            </ul>
            <div className="hsg-featured-snippet">
               <div>So, how do you define digital marketing today?</div>
               <br />
               <h2>What is digital marketing?</h2>
               <p>Digital marketing encompasses all marketing efforts that use an electronic device or the internet. Businesses leverage digital channels such as search engines, social media, email, and other websites to connect with current and prospective customers.</p>
            </div>
            <p>
               A seasoned inbound marketer might say inbound marketing and digital marketing are virtually the same thing, but there are some minor differences. And conversations with marketers and business owners in the U.S., U.K., Asia, Australia, and New Zealand, I've learned a lot about how those small differences are being observed across the world.
            </p>
            <h3>How does a business define digital marketing?</h3>
            <p>Digital marketing is defined by the use of numerous digital tactics and channels to connect with customers where they spend much of their time: online. From the website itself to a business's online branding assets -- digital advertising, email marketing, online brochures, and beyond -- there's a spectrum of tactics that fall under the umbrella of "digital marketing."</p>
            <p>The best digital marketers have a clear picture of how each digital marketing campaign supports their overarching goals. And depending on the goals of their marketing strategy, marketers can support a larger campaign through the free and paid channels at their disposal.</p>
            <p>A <strong>content marketer</strong>, for example, can create a series of blog posts that serve to generate leads from a new ebook the business recently created. The company's <strong>social media marketer</strong> might then help promote these blog posts through paid and organic posts on the business's social media accounts. Perhaps the <strong>email marketer</strong> creates an email campaign to send those who download the ebook more information on the company. We'll talk more about these specific digital marketers in a minute.</p>
            <div className="hsg-featured-snippet">
               <div className="hsg-featured-snippet__wrapper">
                  <h2>Digital Marketing Examples</h2>
                  <div className="hsg-featured-snippet__wrapper--content" data-type="ordered">
                     <ol>
                        <li>Search Engine Optimization (SEO)</li><li>Content Marketing</li><li>Social Media Marketing</li><li>Pay Per Click (PPC)</li><li>Affiliate Marketing</li><li>Native Advertising</li><li>Marketing Automation</li><li>Email Marketing</li><li>Online PR</li><li>Inbound Marketing</li>
                     </ol>
                  </div>
               </div>
            </div>
            <p>Here's a quick rundown of some of the most common digital marketing tactics and the channels involved in each one.</p>
            <h3>Search Engine Optimization (SEO)</h3>
            <br />
            <p>This is the process of optimizing your website to "rank" higher in search engine results pages, thereby increasing the amount of organic (or free) traffic your website receives. The channels that benefit from SEO include websites, blogs, and infographics.</p>
            <p>There are a number of ways to approach SEO in order to generate qualified traffic to your website. These include:</p>
            <ul>
               <li><strong>On page SEO:</strong> This type of SEO focuses on all of the content that exists "on the page" when looking at a website. By researching keywords for their search volume and intent (or meaning), you can answer questions for readers&nbsp;and rank&nbsp;higher on the search engine results pages (SERPs) those questions produce.</li>
               <li><strong>Off page SEO:</strong> This type of SEO focuses on all of the activity that takes place "off the page" when looking to optimize your website. "What activity not on my own website could affect my ranking?" You might ask. The answer is inbound links, also known as backlinks. The number of publishers that link to you, and the relative "authority" of those publishers, affect how highly you rank for the keywords you care about. By networking with other publishers, writing guest posts on these websites&nbsp;(and&nbsp;linking back to your website), and&nbsp;generating external attention, you can earn the backlinks you need to move your website up on all&nbsp;the right SERPs.</li>
               <li><strong>Technical SEO:</strong> This type of SEO focuses on the backend of your website, and how your pages are coded. Image compression, structured data, and CSS file optimization are all forms of technical SEO that can increase your website's loading speed -- an important ranking factor in the eyes of search engines like Google.</li>
            </ul>
            <h3>Content Marketing</h3>
            <p>This term denotes the creation and promotion of content assets for the purpose of generating brand awareness, traffic growth, lead generation, and customers. The channels that can play a part in your content marketing strategy include:</p>
            <ul>
               <li><strong>Blog posts:</strong> Writing and publishing articles on a&nbsp;company&nbsp;blog&nbsp;helps you demonstrate your industry expertise and generates organic search traffic for your business. This ultimately gives you more opportunities to convert website visitors into leads for your sales team.</li>
               <li><strong>Ebooks and whitepapers:</strong> Ebooks, whitepapers, and similar long-form content helps further educate website visitors. It also allows you to&nbsp;exchange content for a reader's contact information, generating leads for your company and moving people&nbsp;through the buyer's journey.</li>
               <li><strong>Infographics:</strong> Sometimes, readers want you to show, not tell. Infographics are a form of visual content that helps website visitors visualize a concept you want to help them learn.</li>
            </ul>
            <p>Want to learn and apply content marketing to your business? Check out BlogDekho Academy's free content marketing training resource page.</p>
            <h3>Social Media Marketing</h3>
            <p>This practice promotes your brand and your content on social media channels to increase brand awareness, drive traffic, and generate leads for your business. The channels you can use in social media marketing include:</p>
            <ul>
               <li>Facebook.</li>
               <li>Twitter.</li>
               <li>LinkedIn.</li>
               <li>Instagram.</li>
               <li>Snapchat.</li>
               <li>Pinterest.</li>
            </ul>
            <br />
            <h3>Pay Per Click (PPC)</h3>
            <p>PPC is a method of driving traffic to your website by paying a publisher every time your ad is clicked. One of the most common types of PPC is <a href="https://ads.google.com/home/#!#%3Fmodal_active=none" rel=" noopener" target="_blank">Google Ads</a>, which allows you to pay for top slots on Google's search engine results pages at a price "per click" of the links you place. Other channels where you can use PPC include:</p>
            <ul>
               <li><strong>Paid ads on Facebook:</strong>&nbsp;Here, users can pay to customize a video, image post, or slideshow, which Facebook will publish to the newsfeeds of people&nbsp;who match your business's audience.</li>
               <li><strong>Twitter Ads campaigns:</strong> Here, users can pay to place a series of posts or profile badges to the news feeds of a specific audience, all dedicated to accomplish a specific goal for your business. This goal can be website traffic, more Twitter followers, tweet engagement, or even app downloads.</li>
               <li><strong>Sponsored Messages on LinkedIn:</strong> Here, users can pay to send messages directly to specific LinkedIn users based on their industry and background.</li>
            </ul>
            <br />
            <h3>Affiliate Marketing</h3>
            <p>This is a type of performance-based advertising where you receive commission for promoting someone else's products or services on your website. Affiliate marketing channels include:</p>
            <ul>
               <li>Hosting video ads through the <a href="https://support.google.com/youtube/answer/72851?hl=en" rel=" noopener" target="_blank">YouTube Partner Program</a>.</li>
               <li>Posting affiliate links from your social media accounts.</li>
            </ul>
            <br />
            <h3>Native Advertising</h3>
            <p>Native advertising refers to advertisements that are primarily content-led and featured on a platform alongside other, non-paid content. BuzzFeed-sponsored posts are a good example, but many people also consider social media advertising to be "native" -- Facebook advertising and Instagram advertising, for example.</p>

            <br /><h3>Marketing Automation</h3>
            <p>Marketing automation refers to the software that serves to automate your basic marketing operations. Many marketing departments can automate repetitive tasks they would otherwise do manually, such as:</p>
            <ul>
               <li><strong>Email newsletters:</strong> Email automation doesn't just allow you to automatically send emails&nbsp;to your subscribers. It can also help you shrink and expand your contact list as needed so your newsletters are only going to the people who want to see them in their inboxes.</li>
               <li><strong>Social media post scheduling:</strong> If you want to grow your organization's presence on a social network, you need to post frequently. This makes manual posting a bit of an unruly process. Social media scheduling tools push your content to your social media channels&nbsp;for you, so you can spend more time focusing on content strategy.</li>
               <li><strong>Lead-nurturing workflows:</strong> Generating leads, and converting those leads into customers, can be a long process.&nbsp;You can automate that process by sending leads specific emails and content once they fit certain criteria, such as when they download and open an ebook.</li>
               <li><strong>Campaign tracking and reporting:&nbsp;</strong>Marketing campaigns can include a ton of different people, emails, content, webpages, phone calls, and more. Marketing automation can help you&nbsp;sort everything you work on by the campaign it's serving, and then track the performance of that campaign based on the progress all of these components make over time.</li>
            </ul>
            <br />
            <h3>Email Marketing</h3>
            <p>Companies use email marketing as a way of communicating with their audiences. Email is often used to promote content, discounts and events, as well as to direct people toward the business's website. The types of emails you might send in an email marketing campaign include:</p>
            <ul>
               <li>Blog subscription newsletters.</li>
               <li>Follow-up emails to website visitors who downloaded something.</li>
               <li>Customer welcome emails.</li>
               <li>Holiday promotions to loyalty program members.</li>
               <li>Tips or similar series emails for customer nurturing.</li>
            </ul>
            <br />
            <h3>Online PR</h3>
            <p>Online PR is the practice of securing earned online coverage with digital publications, blogs, and other content-based websites. It's much like traditional PR, but in the online space. The channels you can use to maximize your PR efforts include:</p>
            <ul>
               <li><strong>Reporter outreach via social media:</strong> Talking to journalists on Twitter, for example, is a great way to develop a relationship with the press that produces earned media opportunities for your company.</li>
               <li><strong>Engaging online reviews of your company:</strong> When someone reviews your company online, whether that review is good or bad, your instinct might be not to touch it. On the contrary, engaging company reviews helps you humanize your brand and deliver powerful messaging that protects your reputation.</li>
               <li><strong>Engaging comments on your personal website or blog:</strong> Similar to the way you'd respond to reviews of your company, responding to the people who are reading your content is the best way to generate productive conversation around your industry.</li>
            </ul>
            <br />
            <h3>Inbound Marketing</h3>
            <p>Inbound marketing refers to a marketing methodology wherein you attract, engage, and delight customers at every stage of the buyer's&nbsp;journey. You can use every digital marketing tactic&nbsp;listed above, throughout an inbound marketing strategy,&nbsp;to create a customer experience that works&nbsp;<em>with</em> the customer, not&nbsp;<em>against</em> them. Here are some classic examples of inbound marketing&nbsp;versus&nbsp;traditional marketing:&nbsp;</p>
            <ul>
               <li>Blogging vs. pop-up ads</li>
               <li>Video marketing vs. commercial advertising</li>
               <li>Email contact lists&nbsp;vs. email spam</li>
            </ul>
            <br />
            <a name="marketer"></a>
            <h2>What does a digital marketer do?</h2>
            <p>Digital marketers are in charge of driving <strong>brand awareness</strong> and <strong>lead generation</strong> through all the digital channels -- both free and paid -- that are at a company's disposal. These channels include social media, the company's own website, search engine rankings, email, display advertising, and the company's blog.</p>
            <p>The digital marketer usually focuses on a different key performance indicator (KPI) for each channel so they can properly measure the company's performance across each one. A digital marketer who's in charge of SEO, for example, measures their website's "organic traffic" -- of that traffic coming from website visitors who found a page of the business's website via a Google search.</p>
            <p>Digital marketing is carried out across many marketing roles today. In small companies, one generalist might own many of the digital marketing tactics described above at the same time. In larger companies, these tactics have multiple specialists that each focus on just one or two of the brand's digital channels.</p>
            <p>Here are some examples of these specialists:</p>
            <h3>SEO Manager</h3>
            <h4>Main KPIs: Organic traffic</h4>
            <p>In short, SEO managers get the business to rank on Google. Using a variety of approaches to search engine optimization, this person might work directly with content creators to ensure the content they produce performs well on Google -- even if the company also posts this content on social media.</p>

            <br /><h3>Content Marketing Specialist</h3>
            <h4>Main KPIs: Time on page, overall blog traffic, YouTube channel subscribers</h4>
            <p>Content marketing specialists are the digital content creators. They frequently keep track of the company's blogging calendar, and come up with a content strategy that includes video as well. These professionals often work with people in other departments to ensure the products and campaigns the business launches are supported with promotional content on each digital channel.</p>

            <br /><h3>Social Media Manager</h3>
            <h4>Main KPIs: Follows, Impressions, Shares</h4>
            <p>The role of a social media manager is easy to infer from the title, but which social networks they manage for the company depends on the industry. Above all, social media managers establish a posting schedule for the company's written and visual content. This employee might also work with the content marketing specialist to develop a strategy for which content to post on which social network.</p>
            <p>(Note: Per the KPIs above, "impressions" refers to the number of times a business's posts appear on the newsfeed of a user.)</p>

            <br /><h3>Marketing Automation Coordinator</h3>
            <h4>Main KPIs: Email open rate, campaign click-through rate, lead-generation (conversion) rate</h4>
            <p>The marketing automation coordinator helps choose and manage the software that allows the whole marketing team to understand their customers' behavior and measure the growth of their business. Because many of the marketing operations described above might be executed separately from one another, it's important for there to be someone who can group these digital activities into individual campaigns and track each campaign's performance.</p>

            <br /><a name="versus"></a>
            <h2>Inbound Marketing vs. Digital Marketing: Which Is It?</h2>
            <p>On the surface, the two seem similar: Both occur primarily online, and both focus on creating digital content for people to consume. So what's the difference?</p>
            <p>The term "digital marketing" doesn't differentiate between push and pull marketing tactics (or what we might now refer to as ‘inbound' and ‘outbound' methods). Both can still fall under the umbrella of digital marketing.</p>
            <p>Digital <i>outbound</i> tactics aim to put a marketing message directly in front of as many people as possible in the online space -- regardless of whether it's relevant or welcomed. For example, the garish banner ads you see at the top of many websites try to <i>push</i> a product or promotion onto people who aren't necessarily ready to receive it.</p>
            <p>On the other hand, marketers who employ digital<i> inbound </i>tactics use online content to attract their target customers onto their websites by providing assets that are helpful to them. One of the simplest yet most powerful inbound digital marketing assets is a blog, which allows your website to capitalize on the terms which your ideal customers are searching for.</p>
            <p>Ultimately, inbound marketing is a methodology that uses digital marketing assets to attract, engage, and delight customers online. Digital marketing, on the other hand, is simply an umbrella term to describe online marketing tactics of any kind, regardless of whether they're considered inbound or outbound.</p>
            <a name="doesitwork"></a>

            <br /><h2>Does digital marketing work for all businesses?</h2>
            <p>Digital marketing can work for any business in any industry. Regardless of what your company sells, digital marketing still involves building out buyer personas to identify your audience's needs, and creating valuable online content. However, that's not to say all businesses should implement a digital marketing strategy in the same way.</p>

            <br /><h3>B2B Digital Marketing</h3>
            <p>If your company is business-to-business (B2B), your digital marketing efforts are likely to be centered around online lead generation, with the end goal being for someone to speak to a salesperson. For that reason, the role of your marketing strategy is to attract and convert the highest quality leads for your salespeople via your website and supporting digital channels.</p>
            <p>Beyond your website, you'll probably choose to focus your efforts on business-focused channels like LinkedIn where your demographic is spending their time online.</p>

            <br /><h3>B2C Digital Marketing</h3>
            <p>If your company is business-to-consumer (B2C), depending on the price point of your products, it's likely that the goal of your digital marketing efforts is to attract people to your website and have them become customers without ever needing to speak to a salesperson.</p>
            <p>For that reason, you're probably less likely to focus on ‘leads' in their traditional sense, and more likely to focus on building an accelerated buyer's journey, from the moment someone lands on your website, to the moment that they make a purchase. This will often mean your product features in your content higher up in the marketing funnel than it might for a B2B business, and you might need to use stronger calls-to-action (CTAs).</p>
            <p>For B2C companies, channels like Instagram and Pinterest can often be more valuable than business-focused platforms LinkedIn.</p>
            <a name="roleof"></a>
            <h2>What is the role of digital marketing to a company?</h2>
            <p>Unlike most offline marketing efforts, digital marketing allows marketers to see accurate results in real time. If you've ever put an advert in a newspaper, you'll know how difficult it is to estimate how many people actually flipped to that page and paid attention to your ad. There's no surefire way to know if that ad was responsible for any sales at all.</p>
            <p>On the other hand, with digital marketing, you can measure the ROI of pretty much any aspect of your marketing efforts.</p>
            <p>Here are some examples:</p>
            <br /><h3>Website Traffic</h3>
            <p>With digital marketing, you can see the exact number of people who have viewed your website's homepage in real time by using digital analytics software, available in marketing platforms like BlogDekho.</p>
            <p>You can also see how many pages they visited, what device they were using, and where they came from, amongst other digital analytics data.</p>
            <p>This intelligence helps you to prioritize which marketing channels to spend more or less time on, based on the number of people those channels are driving to your website. For example, if only 10% of your traffic is coming from organic search, you know that you probably need to spend some time on SEO to increase that percentage.</p>
            <p>With offline marketing, it's very difficult to tell how people are interacting with your brand before they have an interaction with a salesperson or make a purchase. With digital marketing, you can identify trends and patterns in people's behavior before they've reached the final stage in their buyer's journey, meaning you can make more informed decisions about how to attract them to your website right at the top of the marketing funnel.</p>
            <br /><h3>Content Performance and Lead Generation</h3>
            <p>Imagine you've created a product brochure and posted it through people's letterboxes -- that brochure is a form of content, albeit offline. The problem is that you have no idea how many people opened your brochure or how many people threw it straight into the trash.</p>
            <p>Now imagine you had that brochure on your website instead. You can measure exactly how many people viewed the page where it's hosted, and you can collect the contact details of those who download it by using forms. Not only can you measure how many people are engaging with your content, but you're also generating qualified leads when people download it.</p>
            <br /><h3>Attribution Modeling</h3>
            <p>An effective digital marketing strategy combined with the right tools and technologies allows you to trace all of your sales back to a customer's first digital touchpoint with your business.</p>
            <p>We call this attribution modeling, and it allows you to identify trends in the way people research and buy your product, helping you to make more informed decisions about what parts of your marketing strategy deserve more attention, and what parts of your sales cycle need refining.</p>
            <p>Connecting the dots between marketing and sales is hugely important -- according to <a href="http://www.saleslogix.com/media/en-us/docs/collateral/Aberdeen_Report_Sales_Marketing_Alignment.pdf" target="_blank">Aberdeen Group,</a> companies with strong sales and marketing alignment achieve a 20% annual growth rate, compared to a 4% decline in revenue for companies with poor alignment. If you can improve your customer's' journey through the buying cycle by using digital technologies, then it's likely to reflect positively on your business's bottom line.</p>
            <div className="video-container-responsive" style={{ textAlign: "center" }}>
               <iframe className="youtube-frame" src="https://www.youtube.com/embed/h2hfTPjEDIA" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <a name="typesof"></a>
            <br /><h2>What types of digital content should I create?</h2>
            <p>The kind of content you create depends on your audience's needs at different stages in the buyer's journey. You should start by creating buyer personas (use these free templates, or try <a href="//www.makemypersona.com" target="_blank">makemypersona.com</a>) to identify what your audience's goals and challenges are in relation to your business. On a basic level, your online content should aim to help them meet these goals, and overcome their challenges.</p>
            <p>Then, you'll need to think about when they're most likely to be ready to consume this content in relation to what stage they're at in their buyer's journey. We call this content mapping.</p>
            <p>With content mapping, the goal is to target content according to:</p>
            <ol>
               <li>The characteristics of the person who will be consuming it (that's where buyer personas come in).</li>
               <li>How close that person is to making a purchase (i.e., their lifecycle stage).</li>
            </ol>
            <p>In terms of the format of your content, there are a lot of different things to try. Here are some options we'd recommend using at each stage of the buyer's journey:</p>
            <br /><h3>Awareness Stage</h3>
            <ul>
               <li style={{ fontWeight: '400' }}><strong>Blog posts.</strong> Great for increasing your organic traffic when paired with a strong SEO and keyword strategy.</li>
               <li style={{ fontWeight: '400' }}><strong>Infographics. </strong>Very shareable, meaning they increase your chances of being found via social media when others share your content. (Check out these free infographic templates to get you started.)</li>
               <li style={{ fontWeight: '400' }}><strong>Short videos. </strong>Again, these are very shareable and can help your brand get found by new audiences by hosting them on platforms like YouTube.</li>
            </ul>
            <br /><h3>Consideration Stage</h3>
            <ul>
               <li style={{ fontWeight: '400' }}><strong>Ebooks.</strong> Great for lead generation as they're generally more comprehensive than a blog post or infographic, meaning someone is more likely to exchange their contact information to receive it.</li>
               <li style={{ fontWeight: '400' }}><strong>Research reports. </strong>Again, this is a high value content piece which is great for lead generation. Research reports and new data for your industry can also work for the awareness stage though, as they're often picked-up by the media or industry press.</li>
               <li style={{ fontWeight: '400' }}><strong>Webinars.</strong> As they're a more detailed, interactive form of video content, webinars are an effective consideration stage content format as they offer more comprehensive content than a blog post or short video.</li>
            </ul>
            <br /><h3>Decision Stage</h3>
            <ul>
               <li style={{ fontWeight: '400' }}><strong>Case studies.</strong> Having detailed case studies on your website can be an effective form of content for those who are ready to make a purchasing decision, as it helps you positively influence their decision.</li>
               <li style={{ fontWeight: '400' }}><strong>Testimonials. </strong>If case studies aren't a good fit for your business, having short testimonials around your website is a good alternative. For B2C brands, think of testimonials a little more loosely. If you're a clothing brand, these might take the form of photos of how other people styled a shirt or dress, pulled from a branded hashtag where people can contribute.</li>
            </ul>
            <br /><a name="howlong"></a>
            <h2>How long will it take to see results from my content?</h2>
            <p>With digital marketing, it can often feel like you're able to see results much faster than you might with offline marketing due to the fact it's easier to measure ROI. However, it ultimately depends on the scale and effectiveness of your digital marketing strategy.</p>
            <p>If you spend time building comprehensive buyer personas to identify the needs of your audience, and you focus on creating quality online content to attract and convert them, then you're likely to see strong results within the first six months.</p>
            <p>If paid advertising is part of your digital strategy, then the results come even quicker -- but it's recommended to focus on building your organic (or ‘free') reach using content, SEO, and social media for long-term, sustainable success.</p>
            <a name="budget"></a>
            <br /><h2>Do I need a big budget for digital marketing?</h2>
            <p>As with anything, it really depends on what elements of digital marketing you're looking to add to your strategy.</p>
            <p>If you're focusing on inbound techniques like SEO, social media, and content creation for a preexisting website, the good news is you don't need very much budget at all. With inbound marketing, the main focus is on creating high quality content that your audience will want to consume, which unless you're planning to outsource the work, the only investment you'll need is your time.</p>
            <p>You can get started by hosting a website and creating content using BlogDekho's CMS. For those on a tight budget, you can get started using WordPress hosted on <a href="https://wpengine.com/" rel=" noopener" target="_blank">WP Engine</a> and using a simple them from <a href="https://www.studiopress.com" rel=" noopener" target="_blank">StudioPress</a>.</p>
            <p>With outbound techniques like online advertising and purchasing email lists, there is undoubtedly some expense. What it costs comes down to what kind of visibility you want to receive as a result of the advertising.</p>
            <p>For example, to implement PPC using Google AdWords, you'll bid against other companies in your industry to appear at the top of Google's search results for keywords associated with your business. Depending on the competitiveness of the keyword, this can be reasonably affordable, or extremely expensive, which is why it's a good idea to focus building your organic reach, too.</p>
            <br /><a name="mobile"></a>
            <h2>How does mobile marketing fit into my digital marketing strategy?</h2>
            <p>Another key component of digital marketing is mobile marketing. In fact, smartphone usage as a whole accounts for 69% of time spent consuming digital media in the U.S., while desktop-based digital media consumption makes up less than half -- and the U.S. still isn't mobile's biggest fan compared to other countries.</p>
            <p>This means it's essential to optimize your digital ads, web pages, social media images, and other digital assets for mobile devices. If your company has a mobile app that enables users to engage with your brand or shop your products, your app falls under the digital marketing umbrella, too.</p>
            <p>Those engaging with your company online via mobile devices need to have the same positive experience as they would on desktop. This means implementing a mobile-friendly or responsive website design to make browsing user-friendly for those on mobile devices. It might also mean reducing the length of your lead generation forms to create a hassle-free experience for people downloading your content on-the-go. As for your social media images, it's important to always have a mobile user in mind when creating them as image dimensions are smaller on mobile devices, meaning text can be cut-off.</p>
            <p>There are lots of ways you can optimize your digital marketing assets for mobile users, and when implementing any digital marketing strategy, it's hugely important to consider how the experience will translate on mobile devices. By ensuring this is always front-of-mind, you'll be creating digital experiences that work for your audience, and consequently achieve the results you're hoping for.</p>
            <a name="nowwhat"></a>
            <br /><h2>I'm ready to try digital marketing. Now what?</h2>
            <p>If you're already doing digital marketing, it's likely that you're at least reaching some segments of your audience online. No doubt you can think of some areas of your strategy that could use a little improvement, though.</p>
            <p>That's why we created <em>Why Digital Marketing? The Essential Guide to Marketing Your Brand Online</em> -- a step-by-step guide to help you build a digital marketing strategy that's truly effective, whether you're a complete beginner or have a little more experience. You can download it for free here.</p>
         </div>
      );
   }
}

export default DigitalMarketing;