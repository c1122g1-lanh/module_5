package com.example.thi.repository;

import com.example.thi.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface IProductRepository extends JpaRepository<Product, Integer> {
    @Query(value = "select * from product where name like %:name%", nativeQuery = true)
    List<Product> findByName(@Param("name") String name);

    @Query(value = "select * from product",nativeQuery = true)
    List<Product> findAll();

    @Query(value = "DELETE FROM product WHERE id =: code",nativeQuery = true)
    void remove(Integer code);

    @Query(value = "insert into product (name, public_day, quantity,id_type) values (?, ?, ?,?)",nativeQuery = true)
    Product save(Product product);

    @Query(value = "select * from product where id = ?",nativeQuery = true)
    Optional<Product> findById(Integer id);

    @Query(value = "update FROM product set  WHERE id =: code",nativeQuery = true)
    void edit(Product product);


}
