﻿using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Blazor;
using Microsoft.AspNetCore.Blazor.Components;
using Microsoft.AspNetCore.Blazor.Services;
using client.Shared;
using Radzen;
using Radzen.Blazor;
using NorthwindBlazor.Models.Northwind;

namespace NorthwindBlazor.App.Pages
{
    public partial class EditOrderModel : BlazorComponent
    {
        [Inject]
        NorthwindService Northwind { get; set; }

        [Inject]
        IUriHelper UriHelper { get; set; }

        [Parameter]
        protected string OrderID { get; set; }

        protected RadzenContent content1;

        protected RadzenHeading pageTitle;

        protected RadzenLabel closeLabel;

        protected RadzenButton closeButton;

        protected RadzenTemplateForm<Order> form0;

        protected RadzenLabel label2;

        protected RadzenDropDown customerId;

        protected RadzenLabel label3;

        protected RadzenDropDown employeeId;

        protected RadzenLabel label4;

        protected RadzenDatePicker orderDate;

        protected RadzenLabel label5;

        protected RadzenDatePicker requiredDate;

        protected RadzenLabel label6;

        protected RadzenDatePicker shippedDate;

        protected RadzenLabel label7;

        protected RadzenDropDown shipVia;

        protected RadzenLabel label8;

        protected dynamic freight;

        protected RadzenLabel label9;

        protected RadzenTextBox shipName;

        protected RadzenLabel label10;

        protected RadzenTextBox shipAddress;

        protected RadzenLabel label11;

        protected RadzenTextBox shipCity;

        protected RadzenLabel label12;

        protected RadzenTextBox shipRegion;

        protected RadzenLabel label13;

        protected RadzenTextBox shipPostalCode;

        protected RadzenLabel label14;

        protected RadzenTextBox shipCountry;

        protected RadzenButton button2;

        protected RadzenButton button3;

        bool _canEdit;
        protected bool canEdit
        {
            get
            {
                return _canEdit;
            }
            set
            {
                if(_canEdit != value)
                {
                    _canEdit = value;
                    StateHasChanged();
                }
            }
        }

        Order _order;
        protected Order order
        {
            get
            {
                return _order;
            }
            set
            {
                if(_order != value)
                {
                    _order = value;
                    StateHasChanged();
                }
            }
        }

        IEnumerable<Customer> _getCustomersResult;
        protected IEnumerable<Customer> getCustomersResult
        {
            get
            {
                return _getCustomersResult;
            }
            set
            {
                if(_getCustomersResult != value)
                {
                    _getCustomersResult = value;
                    StateHasChanged();
                }
            }
        }

        IEnumerable<Employee> _getEmployeesResult;
        protected IEnumerable<Employee> getEmployeesResult
        {
            get
            {
                return _getEmployeesResult;
            }
            set
            {
                if(_getEmployeesResult != value)
                {
                    _getEmployeesResult = value;
                    StateHasChanged();
                }
            }
        }

        IEnumerable<Shipper> _getShippersResult;
        protected IEnumerable<Shipper> getShippersResult
        {
            get
            {
                return _getShippersResult;
            }
            set
            {
                if(_getShippersResult != value)
                {
                    _getShippersResult = value;
                    StateHasChanged();
                }
            }
        }

        protected override async Task OnInitAsync()
        {
            Northwind.BasePath = UriHelper.GetBaseUri();

            await Task.Run(Load);
        }

        protected async void Load()
        {
            canEdit = true;

            var northwindGetOrderByOrderIdResult = await Northwind.GetOrderByOrderId(int.Parse(OrderID));
                order = northwindGetOrderByOrderIdResult;

            var northwindGetCustomersResult = await Northwind.GetCustomers(null, null, null, null, null, null, null, null);
                getCustomersResult = northwindGetCustomersResult.Data;

            var northwindGetEmployeesResult = await Northwind.GetEmployees(null, null, null, null, null, null, null, null);
                getEmployeesResult = northwindGetEmployeesResult.Data;

            var northwindGetShippersResult = await Northwind.GetShippers(null, null, null, null, null, null, null, null);
                getShippersResult = northwindGetShippersResult.Data;
        }

        protected async void CloseButtonClick(UIMouseEventArgs args)
        {
            UriHelper.NavigateTo("Orders");
        }

        protected async void Form0Submit(Order args)
        {
            var northwindUpdateOrderResult = await Northwind.UpdateOrder(int.Parse(OrderID), order);
                UriHelper.NavigateTo("Orders");
        }

        protected async void Button3Click(UIMouseEventArgs args)
        {
            UriHelper.NavigateTo("Orders");
        }
    }
}
