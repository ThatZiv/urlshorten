# URL Shortener

A free open-source alternative to shortening URLs

[https://shorten.zavaar.net](https://shorten.zavaar.net)


# API
This API is completely free thanks to [deta.sh](https://deta.sh) but standard rate limits apply.
* Endpoint: `https://s.zavaar.net/api`
* Create URL - **POST**
    > Create a shortened URL
  * `/create?url=your_url_here`
    * Query parameters:
      - `url` **required* - an http full url to eventually redirect to
    * Sample:
      * Request:
        * **POST** - `https://s.zavaar.net/api/create?url=https://google.com` 
      * Response:
        * JSON response: 
          ```json
          {
              "id": "Lyz8",
              "key": "uqcooty2afcv",
              "original": "https://google.com",
              "shortened": "https://s.zavaar.net/Lyz8"
          }
          ```
          The `shortened` property is your new URL that redirects to google.com

* Get URL - **GET**
  > Get an already existing shortened URL
  * `/get/your_id_here`
    * Path parameters
      - `id` **required* - an id from a shortened URL
    * Sample:
      * Request:
        * **GET** - `https://s.zavaar.net/api/get/Lyz8` 
      * Response:
        * JSON response: 
          ```json
          {
              "items": [
                  {
                    "id": "Lyz8",
                    "key": "uqcooty2afcv",
                    "original": "https://google.com",
                    "shortened": "https://s.zavaar.net/Lyz8"
                  }
              ],
              "count": 1
          }
          ```
