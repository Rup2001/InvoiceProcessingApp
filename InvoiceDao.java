package com.invoice.server.dao;

import com.invoice.server.model.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;

// this interface save the database into mysql...
// By Hibernate we Write mySql query ... we use here JPA - Java Persistance Api
public interface InvoiceDao extends JpaRepository<Invoice, Long> {

}
