package com.example.thi.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class ProductType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idType;

    @Column
    @NotNull(message = "Không được để trống")
    private String nameType;

    public ProductType() {
    }

    public ProductType(Integer idType, String nameType) {
        this.idType = idType;
        this.nameType = nameType;
    }

    public Integer getIdType() {
        return idType;
    }

    public void setIdType(Integer idType) {
        this.idType = idType;
    }

    public String getNameType() {
        return nameType;
    }

    public void setNameType(String nameType) {
        this.nameType = nameType;
    }
}
