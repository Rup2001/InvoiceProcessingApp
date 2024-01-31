package com.invoice.server.controller;
import com.invoice.server.model.Invoice;
import com.invoice.server.services.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController  // the role of the controller is to handel the request's from frontend...
@CrossOrigin
public class InvoiceController {
    @Autowired // This annotation is used because we can't make an object in interface...
    InvoiceService invoiceService; //Object of the invoiceService interface...
    @PostMapping("/invoice")
    public Invoice addInvoice (@RequestBody Invoice invoice){
        return this.invoiceService.addInvoice(invoice); //return to store the invoices in the database...
    }

    @GetMapping("/invoice")
    public List<Invoice> getInvoice() {
        return this.invoiceService.getInvoices();
    }

    @DeleteMapping("/invoice/{invoiceId}")
    public Invoice deleteInvoice(@PathVariable String invoiceId) {
        return this.invoiceService.deleteInvoice(Long.parseLong(invoiceId));
    }

}
