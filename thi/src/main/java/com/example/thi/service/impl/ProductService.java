package com.example.thi.service.impl;

import com.example.thi.model.Product;
import com.example.thi.repository.IProductRepository;
import com.example.thi.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository iProductRepository;


    @Override
    public List<Product> findAll() {
        return iProductRepository.findAll();
    }

    @Override
    public void remove(Integer code) {
        iProductRepository.remove(code);
    }

    @Override
    public void save(Product product) {
       iProductRepository.save(product);
    }

    @Override
    public Optional<Product> findById(Integer id) {
        return iProductRepository.findById(id);
    }

    @Override
    public List<Product> findByName(String name) {
        return iProductRepository.findByName(name);
    }
}
