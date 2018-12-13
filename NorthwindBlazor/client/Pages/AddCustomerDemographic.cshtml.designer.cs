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
    public partial class AddCustomerDemographicModel : BlazorComponent
    {
        [Inject]
        NorthwindService Northwind { get; set; }

        [Inject]
        IUriHelper UriHelper { get; set; }

        protected RadzenContent content1;

        protected RadzenHeading pageTitle;

        protected RadzenTemplateForm<CustomerDemographic> form0;

        protected RadzenLabel label1;

        protected RadzenTextBox customerTypeId;

        protected RadzenRequiredValidator customerTypeIdRequiredValidator;

        protected RadzenLabel label2;

        protected RadzenTextBox customerDesc;

        protected RadzenButton button1;

        protected RadzenButton button2;

        CustomerDemographic _customerdemographic;
        protected CustomerDemographic customerdemographic
        {
            get
            {
                return _customerdemographic;
            }
            set
            {
                if(_customerdemographic != value)
                {
                    _customerdemographic = value;
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
            customerdemographic = new CustomerDemographic();
        }

        protected async void Form0Submit(CustomerDemographic args)
        {
            var northwindCreateCustomerDemographicResult = await Northwind.CreateCustomerDemographic(customerdemographic);
                UriHelper.NavigateTo("CustomerDemographics");
        }

        protected async void Button2Click(UIMouseEventArgs args)
        {
            UriHelper.NavigateTo("CustomerDemographics");
        }
    }
}
