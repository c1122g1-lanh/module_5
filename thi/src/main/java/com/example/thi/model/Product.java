package com.example.thi.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    @NotNull(message = "Không được để trống...")
    private String name;

    @Column
    @NotNull(message = "Không được để trống...")
    private String publicDay;

    @Column
    @NotNull(message = "Không được để trống...")
    private Integer quantity;

    @ManyToOne
    @JoinColumn(name = "id_type")
    @NotNull(message = "Không được để trống...")
    private ProductType productType;

    public Product() {
    }

    public Product(Integer id, String name, String publicDay, Integer quantity, ProductType productType) {
        this.id = id;
        this.name = name;
        this.publicDay = publicDay;
        this.quantity = quantity;
        this.productType = productType;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPublicDay() {
        return publicDay;
    }

    public void setPublicDay(String publicDay) {
        this.publicDay = publicDay;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public ProductType getProductType() {
        return productType;
    }

    public void setProductType(ProductType productType) {
        this.productType = productType;
    }
}
