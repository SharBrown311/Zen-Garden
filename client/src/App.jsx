import React  from 'react'

import './App.css'


function App() {


  return (
<div>
  {/* GRID CONTAINER */}
  {/* HEADER */}
  <div className="header-section">
    {/* <p>Resize the browser window to fire the <code>resize</code> event.</p>
    <p>Window height: <span id="height"></span></p>
    <p>Window width: <span id="width"></span></p> */}
    <h1>CSS Zen Garden</h1>
    <h2>The Beauty of <abbr title="Cascading Style Sheets">CSS</abbr> Design</h2>
  </div>
  {/* SUBHEADER */}
  <div className="sub-header">		
    <input type="button" className="view-all" defaultValue="VIEW ALL DESIGNS" />
    <input type="button" className="indicator-2" defaultValue="›" />
  </div>
  {/* SECTION 1 */}
  <div className="section-1">	
    <p>A demonstration of what can be accomplished through <abbr title="Cascading Style Sheets">CSS</abbr>-based design. Select any style sheet from the list to load it into this page.</p>
    <p>Download the example <a href="/examples/index" title="This page's source HTML code, not to be modified."><span className="download-icon">⭳</span> HTML file</a> and <a href="/examples/style.css" title="This page's sample CSS, the file you may modify."><span className="download-icon">⭳</span> CSS file</a></p>
    <h3>The Road to Enlightenment</h3>
    <p>Littering a dark and dreary road lay the past relics of browser-specific tags, incompatible <abbr title="Document Object Model">DOM</abbr>s, broken <abbr title="Cascading Style Sheets">CSS</abbr> support, and abandoned browsers.</p>
    <p>We must clear the mind of the past. Web enlightenment has been achieved thanks to the tireless efforts of folk like the <abbr title="World Wide Web Consortium">W3C</abbr>, <abbr title="Web Standards Project">WaSP</abbr>, and the major browser creators.</p>
    <p>The CSS Zen Garden invites you to relax and meditate on the important lessons of the masters. Begin to see with clarity. Learn to use the time-honored techniques in new and invigorating fashion. Become one with the web.</p>
    <h3>So What is This About?</h3>
    <p>There is a continuing need to show the power of <abbr title="Cascading Style Sheets">CSS</abbr>. The Zen Garden aims to excite, inspire, and encourage participation. To begin, view some of the existing designs in the list. Clicking on any one will load the style sheet into this very page. The <abbr title="HyperText Markup Language">HTML</abbr> remains the same, the only thing that has changed is the external <abbr title="Cascading Style Sheets">CSS</abbr> file. Yes, really.</p>
    <p><abbr title="Cascading Style Sheets">CSS</abbr> allows complete and total control over the style of a hypertext document. The only way this can be illustrated in a way that gets people excited is by demonstrating what it can truly be, once the reins are placed in the hands of those able to create beauty from structure. Designers and coders alike have contributed to the beauty of the web; we can always push it further.</p>
  </div>
  {/* SECTION-2 */}
  <div className="section-2">		
    <h3>Participation</h3>
    <p>Strong visual design has always been our focus. You are modifying this page, so strong <abbr title="Cascading Style Sheets">CSS</abbr> skills are necessary too, but the example files are commented well enough that even <abbr title="Cascading Style Sheets">CSS</abbr> novices can use them as starting points. Please see the <a href="http://www.mezzoblue.com/zengarden/resources/" title="A listing of CSS-related resources"><abbr title="Cascading Style Sheets">CSS</abbr> Resource Guide</a> for advanced tutorials and tips on working with <abbr title="Cascading Style Sheets">CSS</abbr>.</p>
    <p>You may modify the style sheet in any way you wish, but not the <abbr title="HyperText Markup Language">HTML</abbr>. This may seem daunting at first if you’ve never worked this way before, but follow the listed links to learn more, and use the sample files as a guide.</p>
    <p>Download the sample <a href="/examples/index" title="This page's source HTML code, not to be modified.">HTML</a> and <a href="/examples/style.css" title="This page's sample CSS, the file you may modify.">CSS</a> to work on a copy locally. Once you have completed your masterpiece (and please, don’t submit half-finished work) upload your <abbr title="Cascading Style Sheets">CSS</abbr> file to a web server under your control. <a href="http://www.mezzoblue.com/zengarden/submit/" title="Use the contact form to send us your CSS file">Send us a link</a> to an archive of that file and all associated assets, and if we choose to use it we will download it and place it on our server.</p>
    <h3>Benefits</h3>
    <p>Why participate? For recognition, inspiration, and a resource we can all refer to showing people how amazing <abbr title="Cascading Style Sheets">CSS</abbr> really can be. This site serves as equal parts inspiration for those working on the web today, learning tool for those who will be tomorrow, and gallery of future techniques we can all look forward to.</p>
  </div>
  <div className="section-3">		
    <h3>Requirements</h3>
    <p>Where possible, we would like to see mostly <abbr title="Cascading Style Sheets, levels 1 and 2">CSS 1 &amp; 2</abbr> usage. <abbr title="Cascading Style Sheets, levels 3 and 4">CSS 3 &amp; 4</abbr> should be limited to widely-supported elements only, or strong fallbacks should be provided. The CSS Zen Garden is about functional, practical <abbr title="Cascading Style Sheets">CSS</abbr> and not the latest bleeding-edge tricks viewable by 2% of the browsing public. The only real requirement we have is that your <abbr title="Cascading Style Sheets">CSS</abbr> validates.</p>
    <p>Luckily, designing this way shows how well various browsers have implemented <abbr title="Cascading Style Sheets">CSS</abbr> by now. When sticking to the guidelines you should see fairly consistent results across most modern browsers. Due to the sheer number of user agents on the web these days — especially when you factor in mobile — pixel-perfect layouts may not be possible across every platform. That’s okay, but do test in as many as you can. Your design should work in at least IE9+ and the latest Chrome, Firefox, iOS and Android browsers (run by over 90% of the population).</p>
    <p>We ask that you submit original artwork. Please respect copyright laws. Please keep objectionable material to a minimum, and try to incorporate unique and interesting visual themes to your work. We’re well past the point of needing another garden-related design.</p>
    <p>This is a learning exercise as well as a demonstration. You retain full copyright on your graphics (with limited exceptions, see <a href="http://www.mezzoblue.com/zengarden/submit/guidelines/">submission guidelines</a>), but we ask you release your <abbr title="Cascading Style Sheets">CSS</abbr> under a Creative Commons license identical to the <a href="http://creativecommons.org/licenses/by-nc-sa/3.0/" title="View the Zen Garden's license information.">one on this site</a> so that others may learn from your work.</p>
  </div>
  {/* FOOTER */}
  <div className="footer">
    {/* ABOUT SECTION */}
    <div className="about-section">	
      <p className="about-section-text" role="contentinfo"><span className="about-text">By </span><a href="http://www.mezzoblue.com/" className="about-info"> <span id="about-author">Dave Shea</span></a>.<span className="about-text"> Bandwidth graciously donated <br />by </span> <a className="about-info" href="http://www.mediatemple.net/"> <span id="mediatemple">mediatemple</span>	</a><span className="about-text">. Now available: </span><a className="about-info" href="http://www.amazon.com/exec/obidos/ASIN/0321303474/mezzoblue-20/"><span id="zen-garden-book">Zen Garden, the book</span></a>.</p>
    </div>
    <div className="icon-section">			
      <a className="icon-html-wrap">
        <i className="icon-html-five">
        </i></a><i className="icon-html-five"><a className="icon-link" href="#">
          <svg className="fa-icon-html-five" id="html-five" fill="rgb(255 ,255 ,255, 0.5)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" title="Check the validity of this site’s HTML">
            <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
          </svg>  
        </a>
      </i>
      <a className="icon-css-wrap">
        <i className="icon-css">
        </i></a><i className="icon-css"><a className="icon-link" href="#">
          <svg className="fa-icon-css" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="17px" height="17px" viewBox="0 0 17 17" version="1.1">
            <path d="M16.5 1.26l-2.407 12.064-7.277 2.416-6.316-2.416 0.643-3.223h2.688l-0.263 1.33 3.818 1.457 4.398-1.457 0.614-3.068h-10.929l0.524-2.686h10.94l0.345-1.73h-10.931l0.533-2.687h13.62z" fill="rgb(255 ,255 ,255, 0.5)" />
          </svg>
        </a>      
      </i>
      <a className="icon-licensing-wrap">
        <i className="icon-licensing">  
        </i></a><i className="icon-licensing"><a href="#" className="icon-link">
          <svg className="fa-licensing-icon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width={17} height={17} viewBox="0 0 32 32" xmlspace="preserve">
            <g fill="none" stroke="rgb(255, 255, 255, .5)" strokeWidth={1} opacity="85%">
              <path d="M 20.5 11 h 1 A 2.5 2.5 0 0 1 24 13.5 a 0.5 0.5 0 0 0 1 0 A 3.5 3.5 0 0 0 21.5 10 h -1 A 3.5 3.5 0 0 0 17 13.5 v 5 A 3.5 3.5 0 0 0 20.5 22 h 1 A 3.5 3.5 0 0 0 25 18.5 a 0.5 0.5 0 0 0 -1 0 A 2.5 2.5 0 0 1 21.5 21 h -1 A 2.5 2.5 0 0 1 18 18.5 v -5 A 2.5 2.5 0 0 1 20.5 11 Z m -10 0 h 1 A 2.5 2.5 0 0 1 14 13.5 a 0.5 0.5 0 0 0 1 0 A 3.5 3.5 0 0 0 11.5 10 h -1 A 3.5 3.5 0 0 0 7 13.5 v 5 A 3.5 3.5 0 0 0 10.5 22 h 1 A 3.5 3.5 0 0 0 15 18.5 a 0.5 0.5 0 0 0 -1 0 A 2.5 2.5 0 0 1 11.5 21 h -1 A 2.5 2.5 0 0 1 8 18.5 v -5 A 2.5 2.5 0 0 1 10.5 11 Z M 16 1 A 15 15 0 1 0 31 16 A 15.017 15.017 0 0 0 16 1 Z m 0 29 A 14 14 0 1 1 30 16 A 14.016 14.016 0 0 1 16 30 Z" strokeLinecap="round" />
            </g></svg>
        </a>
      </i>
      <a className="icon-accessibility-wrap">
        <i className="icon-accessibility"> 
        </i></a><i className="icon-accessibility"><a href="#" className="icon-link">
          <svg className="fa-icon-accessibility" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><circle id="circle" cx={17} cy={4} r={2} fill="rgb(255,255,255,.5)" />
            <g fill="rgb(255 ,255 ,255, 0.5)">
              <path d="m17.836 12.014-4.345.725 3.29-4.113a1 1 0 0 0-.227-1.457l-6-4a.999.999 0 0 0-1.262.125l-4 4 1.414 1.414 3.42-3.42 2.584 1.723-2.681 3.352a5.913 5.913 0 0 0-5.5.752l1.451 1.451A3.972 3.972 0 0 1 8 12c2.206 0 4 1.794 4 4 0 .739-.216 1.425-.566 2.02l1.451 1.451A5.961 5.961 0 0 0 14 16c0-.445-.053-.878-.145-1.295L17 14.181V20h2v-7a.998.998 0 0 0-1.164-.986zM8 20c-2.206 0-4-1.794-4-4 0-.739.216-1.425.566-2.02l-1.451-1.451A5.961 5.961 0 0 0 2 16c0 3.309 2.691 6 6 6 1.294 0 2.49-.416 3.471-1.115l-1.451-1.451A3.972 3.972 0 0 1 8 20z" />
            </g></svg>
        </a>
      </i>
      <a className="icon-github-wrap">
        <i className="icon-github">
        </i></a><i className="icon-github"><a href="#" className="icon-link">
          <svg className="fa-icon-github" viewBox="0 0 32 32" height="24px" width="24px">
            <g fill="rgb(255 ,255 ,255, 0.5)">
              <path d="M16 0.396c-8.84 0-16 7.164-16 16 0 7.071 4.584 13.067 10.94 15.18 0.8 0.151 1.093-0.344 1.093-0.769 0-0.38-0.013-1.387-0.020-2.72-4.451 0.965-5.389-2.147-5.389-2.147-0.728-1.847-1.78-2.34-1.78-2.34-1.449-0.992 0.112-0.972 0.112-0.972 1.607 0.112 2.451 1.648 2.451 1.648 1.427 2.447 3.745 1.74 4.66 1.331 0.144-1.035 0.556-1.74 1.013-2.14-3.553-0.4-7.288-1.776-7.288-7.907 0-1.747 0.62-3.173 1.647-4.293-0.18-0.404-0.72-2.031 0.14-4.235 0 0 1.34-0.429 4.4 1.64 1.28-0.356 2.64-0.532 4-0.54 1.36 0.008 2.72 0.184 4 0.54 3.040-2.069 4.38-1.64 4.38-1.64 0.86 2.204 0.32 3.831 0.16 4.235 1.020 1.12 1.64 2.547 1.64 4.293 0 6.147-3.74 7.5-7.3 7.893 0.56 0.48 1.080 1.461 1.080 2.96 0 2.141-0.020 3.861-0.020 4.381 0 0.42 0.28 0.92 1.1 0.76 6.401-2.099 10.981-8.099 10.981-15.159 0-8.836-7.164-16-16-16z">
              </path></g></svg>
        </a>
      </i>	
    </div>
  </div>
  {/* ASIDE 1 */}
  <div className="aside-1">
    <ul className="design-list">
      <li className="authors-designs-1">
        <a href="/221/" className="design-name">Mid Century Modern</a><br /><span className="by"> by </span>						<a href="http://andrewlohman.com/" className="designer-name">Andrew Lohman</a>
      </li>					
      <br />
      <li className="authors-designs-1">
        <a href="/219/" className="design-name"> Steel </a>
        <br /> <span className="by"> by </span>							<a href="http://steffen-knoeller.de" className="designer-name"> Steffen Knoeller </a>
      </li>		
      <br />
      <li className="authors-designs-1">
        <a href="/217/" className="design-name">Screen Filler</a><br /> <span className="by"> by </span>						<a href="http://elliotjaystocks.com/" className="designer-name">Elliot Jay Stocks</a>
      </li>
      <br />
      <li className="authors-designs-1">
        <a href="/215/" className="design-name">A Robot Named Jimmy</a><br /> <span className="by"> by </span>					<a href="http://meltmedia.com/" className="designer-name">meltmedia</a>
      </li>
      <br />
      <li className="authors-designs-2">	
        <a href="/220/" className="design-name">Garments</a><br /><span className="by"> by </span>						<a href="http://danielmall.com/" className="designer-name">Dan Mall</a>
      </li>							
      <br />
      <li className="authors-designs-2">
        <a href="/218/" className="design-name">Apothecary</a><br /><span className="by"> by </span>						<a href="http://trentwalton.com" className="designer-name">Trent Walton</a>
      </li>									
      <br />
      <li className="authors-designs-2">
        <a href="/216/" className="design-name">Fountain Kiss</a><br /><span className="by"> by </span>							<a href="http://jeremycarlson.com" className="designer-name">Jeremy Carlson </a>
      </li>								
      <br />
      <li className="authors-designs-2">
        <a href="/214/" className="design-name">Verde Moderna</a>	<br /><span className="by"> by </span>						<a href="http://www.mezzoblue.com/" className="designer-name"> Dave Shea </a>
      </li>
    </ul></div>
  {/* ASIDE 2 */}
  <div className="aside-2">			
    <ul className="resources-list">
      <li className="resource-list-items" id="view-css">
        <a href="style.css" title="View the source CSS file of the currently-viewed design.">
          View This Design’s  <abbr title="Cascading Style Sheets">CSS</abbr>						</a>
      </li>
      <br />
      <li className="resource-list-items" id="zen-faq">
        <a href="http://www.mezzoblue.com/zengarden/faq/" title="A list of Frequently Asked Questions about the Zen Garden.">
          <abbr title="Frequently Asked Questions">FAQ</abbr>						</a>
      </li>
      <br />
      <li className="resource-list-items" id="zen-translations">
        <a href="http://www.mezzoblue.com/zengarden/translations/" title="View translated versions of this page.">
          Translations						</a>
      </li>
      <br />
      <li className="resource-list-items" id="css-resources">
        <a href="http://www.mezzoblue.com/zengarden/resources/" title="Links to great sites with information on using CSS.">
          <abbr title="Cascading Style Sheets">CSS</abbr> Resources	 					</a>
      </li>
      <br />
      <li className="resource-list-items" id="zen-submit">
        <a href="http://www.mezzoblue.com/zengarden/submit/" title="Send in your own CSS file.">
          Submit a Design						</a>
      </li>
    </ul></div>
</div>

  )
}

export default App

