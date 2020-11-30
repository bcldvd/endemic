import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { ContactMethod, Customer, CustomerEmail, CustomerPhone, EndemicUserAttendance } from './pay.interface';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss'],
})
export class PayComponent implements OnInit {
  customers: Customer[] = [];
  tenantId = '';
  ContactMethod = ContactMethod;
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}
  ngOnInit() {
    // this.simulateExistingUser();
    this.route.params.subscribe((params) => {
      this.tenantId = params.tenantId;
    });
  }

  onCustomerAdded(customer: Customer) {
    this.customers.push(customer);
  }

  removeCustomer(index: number) {
    this.customers.splice(index, 1);
  }

  private simulateExistingUser() {
    const mockCustomer = { email: 'aa@aa.fr', contactMethod: ContactMethod.MAIL };
    this.customers.push(mockCustomer);
  }

  addAttendance() {
    this.customers.forEach((customer) => {
      const userAttendanceData = {
        tenantId: this.tenantId,
        date: Date.now(),
      } as EndemicUserAttendance;

      if (customer.contactMethod === ContactMethod.MAIL) {
        userAttendanceData.email = (customer as CustomerEmail).email;
      } else {
        userAttendanceData.phone = (customer as CustomerPhone).phone;
      }
      this.apiService.post('/attendance', userAttendanceData).subscribe((data) => {
        console.log('success');
      });
    });
  }
}
