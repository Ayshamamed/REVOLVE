import React, { useState } from 'react';

const ReadMore = () => {
    const [ component, setComponent ] = useState(false);
    return (
        <div className="read-main lead fw-semibold ">
            <div className='content  align-items-center '>
            REVOLVE is the next-generation fashion retailer for Millennial and Generation Z consumers.
            21st As a trusted, premium lifestyle brand, and a go-to online source for discovery and inspiration, we deliver an engaging customer experience from a vast yet curated offering totaling over 49,000 apparel, footwear, accessories and beauty styles. Our dynamic platform connects a deeply engaged community of millions of consumers, thousands of global fashion influencers, and more than 1,000 emerging, established and owned brands.
            Through 18 years of continued investment in technology, data analytics, and innovative marketing and merchandising strategies, we have built a powerful platform and brand that we believe is connecting with the next generation of consumers and is redefining fashion retail for the 21st century.
            <span className={`long-text ${component? "expanded mt-3" : "" }`}>
                REVOLVE was founded in 2003, with the vision of leveraging digital channels and technology to transform the shopping experience. We believed that traditional retail was either too mass or too limited, struggled to consistently provide on-trend merchandise, and was failing to connect with younger consumers. REVOLVE was created to offer a scaled, one-stop destination for youthful, aspirational consumers. We believe that our model, which is more targeted than department stores or mass market online retailers, and provides a greater selection than specialty retailers, allows us to more effectively serve consumers.

                To improve on the merchandise offerings from traditional retail, we have built a custom, proprietary technology platform to manage nearly all aspects of our business, with a particular focus on developing sophisticated and highly automated inventory management, pricing, and trend-forecasting algorithms. Our proprietary technology leverages data from a vast net of hundreds of thousands of styles, up to 60 attributes per style, and millions of customer interactions, creating a strategic asset of hundreds of millions of data points. We have complemented these efforts with an organization built from the ground-up to make decisions in a data-first, customer centric way. Together, this enables a "read and react" merchandise approach; we make shallow initial buys, then use our proprietary technology to identify and re-order strong sellers, turning the fashion cycle from a predictive art to a data-driven science. This approach facilitates constant newness, with over 900 new styles launched per week on average in 2020, while managing inventory and fashion risk. As a result, in 2020, approximately 77% of our net sales were at full price, which we define as sales at not less than 95% of the full retail price.
            </span>
           
        </div>
            <button className='btn btn-dark btn-lg text-center mt-2' style={{maxWidth:400, borderRadius:"0px"}} onClick={()=>setComponent((prev)=>!prev)}>{component? "SHOW LESS" : "READ MORE"}</button>

        </div>


    )
}

export default ReadMore