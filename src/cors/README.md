# CORS

> CORS实现方式

## CORS 需要浏览器和后端同时支持。IE 8 和 9 需要通过 XDomainRequest 来实现。

```
浏览器会自动进行 CORS 通信，实现 CORS 通信的关键是后端。只要后端实现了 CORS，就实现了跨域。

服务端设置 Access-Control-Allow-Origin 就可以开启 CORS。 该属性表示哪些域名可以访问资源，如果设置通配符则表示所有网站都可以访问资源。

虽然设置 CORS 和前端没什么关系，但是通过这种方式解决跨域问题的话，会在发送请求时出现两种情况，分别为简单请求和复杂请求。
```

## 简单请求
```
	同时满足以下两大条件，就属于简单请求
	1. 使用下列方法之一： 
		GET、 HEAD 、 POST
	2. Content-Type的值仅限于下列三者之一
		text/plain
		multipart/form-data
		application/x-www-form-urlencoded

```

## 复杂请求
	不符合以上条件的请求就肯定是复杂请求了。
	```
	复杂请求的 CORS 请求，会在正式通信之前，增加一次 HTTP 查询请求，称为"预检"请求,该请求是 option 方法的，通过该请求来知道服务端是否允许跨域请求。
	```