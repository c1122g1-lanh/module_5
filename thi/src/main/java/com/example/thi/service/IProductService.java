package com.example.thi.service;

import com.example.thi.model.Product;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface IProductService {
    List<Product> findAll();

    void remove(Integer code);

    void save(Product product);

    Optional<Product> findById(Integer id);

    List<Product> findByName(@Param("name") String name);
}
