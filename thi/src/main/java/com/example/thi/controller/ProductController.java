package com.example.thi.controller;

import com.example.thi.model.Product;
import com.example.thi.service.impl.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
@CrossOrigin("*")
public class ProductController {
    @Autowired
    private ProductService productService;


    @GetMapping("")
    @ResponseStatus(HttpStatus.OK)
    public List<Product> showList(){
        return productService.findAll();
    }

    @GetMapping("")
    @ResponseStatus(HttpStatus.OK)
    public List<Product> showFindByName(String name){
        return productService.findByName(name);
    }

}
