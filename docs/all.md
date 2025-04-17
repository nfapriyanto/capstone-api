# Capstone API

> **API untuk mengelola konten website, termasuk slider dan artikel, dengan autentikasi pengguna dan admin.**

## Endpoint

<div class="api-endpoint">http://13.215.253.107:5000</div>

### Register

* URL
  * `/register`
* Method
  * POST
* Request Body
  * `name` as `string`
  * `email` as `string`, must be unique
  * `password` as `string`, must be at least 8 characters
* Response

```json
{
  "error": false,
  "message": "User berhasil ditambahkan"
}
```

### Login

* URL
  * `/login`
* Method
  * POST
* Request Body
  * `email` as `string`
  * `password` as `string`
* Response

```json
{
  "error": false,
  "message": "success",
  "loginResult": {
    "userId": "user-id",
    "name": "User Name",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

### Admin Login

* URL
  * `/admin`
* Method
  * POST
* Request Body
  * `email` as `string`
  * `password` as `string`
* Response

```json
{
  "error": false,
  "message": "success",
  "loginResult": {
    "adminId": "admin-id",
    "name": "Admin",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

### Get All Sliders

* URL
  * `/sliders`
* Method
  * GET
* Response

```json
{
  "error": false,
  "message": "success",
  "data": [
    {
      "id": "slider-id",
      "title": "Slider Title",
      "description": "Slider Description",
      "imageUrl": "/uploads/image.jpg",
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z"
    }
  ]
}
```

### Get Slider by ID

* URL
  * `/sliders/:id`
* Method
  * GET
* Response

```json
{
  "error": false,
  "message": "success",
  "data": {
    "id": "slider-id",
    "title": "Slider Title",
    "description": "Slider Description",
    "imageUrl": "/uploads/image.jpg",
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-01-01T00:00:00.000Z"
  }
}
```

### Create Slider (Admin Only)

* URL
  * `/admin/sliders`
* Method
  * POST
* Headers
  * Content-Type: multipart/form-data
  * Authorization: Bearer `<token>`
* Request Body
  * `title` as `string`
  * `description` as `string`
  * `photo` as `file`, must be a valid image file (JPG, JPEG, or PNG)
* Response

```json
{
  "error": false,
  "message": "Slider berhasil ditambahkan",
  "data": {
    "sliderId": "slider-id"
  }
}
```

### Update Slider (Admin Only)

* URL
  * `/admin/sliders/:id`
* Method
  * PUT
* Headers
  * Content-Type: multipart/form-data
  * Authorization: Bearer `<token>`
* Request Body
  * `title` as `string`
  * `description` as `string`
  * `photo` as `file`, optional, must be a valid image file (JPG, JPEG, or PNG)
* Response

```json
{
  "error": false,
  "message": "Slider berhasil diperbarui"
}
```

### Delete Slider (Admin Only)

* URL
  * `/admin/sliders/:id`
* Method
  * DELETE
* Headers
  * Authorization: Bearer `<token>`
* Response

```json
{
  "error": false,
  "message": "Slider berhasil dihapus"
}
```

### Get All Articles

* URL
  * `/articles`
* Method
  * GET
* Response

```json
{
  "error": false,
  "message": "success",
  "data": [
    {
      "id": "article-id",
      "title": "Article Title",
      "content": "Article Content",
      "imageUrl": "/uploads/image.jpg",
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z"
    }
  ]
}
```

### Get Article by ID

* URL
  * `/articles/:id`
* Method
  * GET
* Response

```json
{
  "error": false,
  "message": "success",
  "data": {
    "id": "article-id",
    "title": "Article Title",
    "content": "Article Content",
    "imageUrl": "/uploads/image.jpg",
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-01-01T00:00:00.000Z"
  }
}
```

### Create Article (Admin Only)

* URL
  * `/admin/articles`
* Method
  * POST
* Headers
  * Content-Type: multipart/form-data
  * Authorization: Bearer `<token>`
* Request Body
  * `title` as `string`
  * `content` as `string`
  * `photo` as `file`, must be a valid image file (JPG, JPEG, or PNG)
* Response

```json
{
  "error": false,
  "message": "Artikel berhasil ditambahkan",
  "data": {
    "articleId": "article-id"
  }
}
```

### Update Article (Admin Only)

* URL
  * `/admin/articles/:id`
* Method
  * PUT
* Headers
  * Content-Type: multipart/form-data
  * Authorization: Bearer `<token>`
* Request Body
  * `title` as `string`
  * `content` as `string`
  * `photo` as `file`, optional, must be a valid image file (JPG, JPEG, or PNG)
* Response

```json
{
  "error": false,
  "message": "Artikel berhasil diperbarui"
}
```

### Delete Article (Admin Only)

* URL
  * `/admin/articles/:id`
* Method
  * DELETE
* Headers
  * Authorization: Bearer `<token>`
* Response

```json
{
  "error": false,
  "message": "Artikel berhasil dihapus"
}
```

### Access Uploaded Files

* URL
  * `/uploads/:filename`
* Method
  * GET
* Response
  * The image file if it exists, or a 404 error if the file does not exist.
* Example
  * <div class="api-endpoint">http://13.215.253.107:5000/uploads/1744863672764-logo.jpg</div>
