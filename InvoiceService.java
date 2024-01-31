package com.invoice.server.services;

import com.invoice.server.model.Invoice;

import java.util.List;

// Interface only have abstruct classes
public interface InvoiceService {

    public Invoice addInvoice (Invoice invoice);
    public List<Invoice> getInvoices();
    public Invoice deleteInvoice(long id);
}
