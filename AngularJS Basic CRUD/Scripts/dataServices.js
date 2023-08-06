'use strict';
var webApiBaseUrl = "//" + gethostname() + "/api/";
//var webApiBaseUrl = "http://localhost:35688/api/";
angular.module('FactorFoxApp.AppServices', ['ngResource'])
    .factory('InvoiceList', function ($resource) {
        return $resource(webApiBaseUrl + 'InvoiceApi/GetPendingInvoices', {}, {
            post: {
                method: 'POST', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })

     .factory('InvoiceListGroupBySchedule', function ($resource) {
         return $resource(webApiBaseUrl + 'InvoiceApi/GetPendingInvoicesGroupBySchedule', {}, {
             post: {
                 method: 'POST', isArray: false,
                 headers: { 'Content-Type': 'application/json', 'token': getToken() }
             }
         });
     })


    .factory('ClientList', function ($resource) {
        return $resource(webApiBaseUrl + 'InvoiceApi/GetFactorClients', {}, {
            post: {
                method: 'POST', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })
    //new addition by arpit for contact 
     //.factory('CountryList', function ($resource) {
     //    return $resource(webApiBaseUrl + 'ContactsApi/GetCountryList', {}, {
     //        post: {
     //            method: 'POST', isArray: false,
     //            headers: { 'Content-Type': 'application/json', 'token': getToken() }
     //        }
     //    });
     //})
     .factory('InvoiceTemplateTypeList', function ($resource) {
         return $resource(webApiBaseUrl + 'InvoiceApi/GetInvoiceTemplateType', {}, {
             post: {
                 method: 'POST', isArray: false,
                 headers: { 'Content-Type': 'application/json', 'token': getToken() }
             }
         });
     })
    .factory('FunderList', function ($resource) {
        return $resource(webApiBaseUrl + 'InvoiceApi/GetFunder', {}, {
            post: {
                method: 'POST', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })




     .factory('StateList', function ($resource) {
         return $resource(webApiBaseUrl + 'ContactsApi/GetStateListByCountryId', {}, {
             query: {
                 method: 'POST', isArray: false,
                 headers: { 'Content-Type': 'application/json', 'token': getToken() }
             }
         });
     })
     .factory('CustomerReciptType', function ($resource) {
         return $resource(webApiBaseUrl + 'ContactsApi/ReceiptType', {}, {
             query: {
                 method: 'POST', isArray: false,
                 headers: { 'Content-Type': 'application/json', 'token': getToken() }
             }
         });
     })
     .factory('LegalStatusList', function ($resource) {
         return $resource(webApiBaseUrl + 'ContactsApi/GetLegalEntityList', {}, {
             post: {
                 method: 'POST', isArray: false,
                 headers: { 'Content-Type': 'application/json', 'token': getToken() }
             }
         });
     })

    .factory('CustomerList', function ($resource) {
        return $resource(webApiBaseUrl + 'InvoiceApi/GetFactorCustomer', {}, {
            query: {
                method: 'GET', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })
    .factory('TermList', function ($resource) {
        return $resource(webApiBaseUrl + 'InvoiceApi/GetTerms', {}, {
            query: {
                method: 'GET', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })

    .factory('AutomaticReportsMasterList', function ($resource) {
        return $resource(webApiBaseUrl + 'AutomaticReportsApi/GetAutomaticReportsMasterList', {}, {
            query: {
                method: 'GET', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })

    .factory('MethodList', function ($resource) {
        return $resource(webApiBaseUrl + 'InvoiceApi/GetMethods', {}, {
            query: {
                method: 'GET', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })
    .factory('ClientCustomer', function ($resource) {
        return $resource(webApiBaseUrl + 'InvoiceApi/GetClientCustomer', {}, {
            query: {
                method: 'GET', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })

    .factory('ClientCustomerMatch', function ($resource) {
        return $resource(webApiBaseUrl + 'InvoiceApi/GetClientCustomerMatchDetails', {}, {
            query: {
                method: 'GET', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })

     .factory('GetTotalInvoiceAmountForSchedule', function ($resource) {
         return $resource(webApiBaseUrl + 'InvoiceApi/GetTotalInvoiceAmountForSchedule', {}, {
             query: {
                 method: 'GET', isArray: false,
                 headers: { 'Content-Type': 'application/json', 'token': getToken() }
             }
         });
     })


    .factory('CalculateAdv', function ($resource) {
        return $resource(webApiBaseUrl + 'InvoiceApi/CalculateAdvanceAmount', {}, {
            query: {
                method: 'GET', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })
    .factory('ClientCalculateAdv', function ($resource) {
        return $resource(webApiBaseUrl + 'ClientInvoiceApi/CalculateAdvanceAmount', {}, {
            query: {
                method: 'GET', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })
    .factory('ScheduleList', function ($resource) {
        return $resource(webApiBaseUrl + 'InvoiceApi/GetSchedule', {}, {
            query: {
                method: 'GET', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })

     .factory('FactoringType', function ($resource) {
         return $resource(webApiBaseUrl + 'InvoiceApi/GetFactoringTypeForClient', {}, {
             query: {
                 method: 'GET', isArray: false,
                 headers: { 'Content-Type': 'application/json', 'token': getToken() }
             }
         });
     })

     .factory('FactoringTypeForClientCustomer', function ($resource) {
         return $resource(webApiBaseUrl + 'InvoiceApi/GetFactoringTypeForClientCustomer', {}, {
             query: {
                 method: 'GET', isArray: false,
                 headers: { 'Content-Type': 'application/json', 'token': getToken() }
             }
         });
     })

    .factory('SaveInvoice', function ($resource) {
        return $resource(webApiBaseUrl + 'InvoiceApi/AddInvoice', {}, {
            post: {
                method: 'post', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })
    .factory('ScheduledInvoiceList', function ($resource) {
        return $resource(webApiBaseUrl + 'InvoiceApi/ScheduledInvoiceList', {}, {
            query: {
                method: 'GET', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })

    .factory('FunderInvoiceList', function ($resource) {
        return $resource(webApiBaseUrl + 'InvoiceApi/FunderInvoiceList', {}, {
            query: {
                method: 'POST', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })


    .factory('AdjuestmetList', function ($resource) {
        return $resource(webApiBaseUrl + 'InvoiceApi/AdjuestmetList', {}, {
            query: {
                method: 'GET', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })
    .factory('EditInvoice', function ($resource) {
        return $resource(webApiBaseUrl + 'InvoiceApi/EditInvoice', {}, {
            query: {
                method: 'GET', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })
    .factory('UpdateStatus', function ($resource) {
        return $resource(webApiBaseUrl + 'InvoiceApi/UpdateInvoiceStatus', {}, {
            post: {
                method: 'POST', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })
     .factory('DeductDiscount', function ($resource) {
         return $resource(webApiBaseUrl + 'InvoiceApi/GetAdvanceAmtAfterDeductDiscount', {}, {
             query: {
                 method: 'GET', isArray: false,
                 headers: { 'Content-Type': 'application/json', 'token': getToken() }
             }
         });
     })//ContactAPI starts here
    .factory('ClientDeductDiscount', function ($resource) {
        return $resource(webApiBaseUrl + 'ClientInvoiceApi/GetAdvanceAmtAfterDeductDiscount', {}, {
            query: {
                method: 'GET', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })
    .factory('CountryList', function ($resource) {
        return $resource(webApiBaseUrl + 'ContactsApi/GetCountryList', {}, {
            post: {
                method: 'POST', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })
    .factory('LegalEntityList', function ($resource) {
        return $resource(webApiBaseUrl + 'ContactsApi/GetLegalEntityList', {}, {
            post: {
                method: 'POST', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })
    .factory('SalutationList', function ($resource) {
        return $resource(webApiBaseUrl + 'ContactsApi/GetSalutationList', {}, {
            post: {
                method: 'POST', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })
    .factory('LanguageList', function ($resource) {
        return $resource(webApiBaseUrl + 'ContactsApi/GetLanguageList', {}, {
            post: {
                method: 'POST', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })
    .factory('TimeZoneList', function ($resource) {
        return $resource(webApiBaseUrl + 'ContactsApi/GetTimeZoneList', {}, {
            post: {
                method: 'POST', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })//ContactAPI ends here
    .factory('PostPayment', function ($resource) {
        return $resource(webApiBaseUrl + 'PaymentApi/PostPayment', {}, {
            post: {
                method: 'post', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })

    .factory('PostPaymentBySchedule', function ($resource) {
        return $resource(webApiBaseUrl + 'PaymentApi/PostPaymentBySchedule', {}, {
            post: {
                method: 'post', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })
    .factory('PostRebate', function ($resource) {
        return $resource(webApiBaseUrl + 'PaymentApi/PostRebate', {}, {
            post: {
                method: 'post', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })

    .factory('PostRebateBySchedule', function ($resource) {
        return $resource(webApiBaseUrl + 'PaymentApi/PostRebateBySchedule', {}, {
            post: {
                method: 'post', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })


    .factory('GetBankAccounts', function ($resource) {
        return $resource(webApiBaseUrl + 'PaymentApi/GetBankAccounts', {}, {
            query: {
                method: 'GET', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })
    .factory('GetTransactionMethods', function ($resource) {
        return $resource(webApiBaseUrl + 'PaymentApi/GetTransactionMethods', {}, {
            query: {
                method: 'GET', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })
    .factory('PaymentList', function ($resource) {
        return $resource(webApiBaseUrl + 'PaymentApi/GetPayments', {}, {
            post: {
                method: 'POST', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })

    .factory('PaymentListGroupBySchedule', function ($resource) {
        return $resource(webApiBaseUrl + 'PaymentApi/GetPaymentsGroupBySchedule', {}, {
            post: {
                method: 'POST', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })
    .factory('RebateList', function ($resource) {
        return $resource(webApiBaseUrl + 'PaymentApi/GetRebates', {}, {
            post: {
                method: 'POST', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })

    .factory('RebateListGroupBySchedule', function ($resource) {
        return $resource(webApiBaseUrl + 'PaymentApi/GetRebatesGroupBySchedule', {}, {
            post: {
                method: 'POST', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })
    .factory('ConsultantList', function ($resource) {
        return $resource(webApiBaseUrl + 'ConsultantApi/GetConsultants', {}, {
            post: {
                method: 'POST', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })
    .factory('LenderList', function ($resource) {
        return $resource(webApiBaseUrl + 'LenderApi/GetLenders', {}, {
            post: {
                method: 'POST', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })
    .factory('ReceiptList', function ($resource) {
        return $resource(webApiBaseUrl + 'ReceiptApi/GetReceipts', {}, {
            post: {
                method: 'POST', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })

    .factory('ReceiptListGroupBySchedule', function ($resource) {
        return $resource(webApiBaseUrl + 'ReceiptApi/GetReceiptsGroupBySchedule', {}, {
            post: {
                method: 'POST', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })


    .factory('PostReceipts', function ($resource) {
        return $resource(webApiBaseUrl + 'ReceiptApi/PostReceipt', {}, {
            post: {
                method: 'POST', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })
    .factory('PostConsultants', function ($resource) {
        return $resource(webApiBaseUrl + 'ConsultantApi/PostConsultant', {}, {
            post: {
                method: 'POST', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })
    .factory('ClientCreditLine', function ($resource) {
        return $resource(webApiBaseUrl + 'InvoiceApi/GetClientCreditLine', {}, {
            query: {
                method: 'GET', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })
    .factory('AllTransactionList', function ($resource) {
        return $resource(webApiBaseUrl + 'SearchInvoicesApi/GetSearchedInvoiceList', {}, {
            post: {
                method: 'POST', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })

    .factory('AllTransactionListGroupBySchedule', function ($resource) {
        return $resource(webApiBaseUrl + 'SearchInvoicesApi/GetSearchedInvoiceListGroupBySchedule', {}, {
            post: {
                method: 'POST', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })


    .factory('ListNotConvertedToUnfactored', function ($resource) {
        return $resource(webApiBaseUrl + 'SearchInvoicesApi/GetInvoicesListNotConvertedToUnfactored', {}, {
            post: {
                method: 'POST', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })
    .factory('EscrowList', function ($resource) {
        return $resource(webApiBaseUrl + 'EscrowApi/GetEscrows', {}, {
            post: {
                method: 'POST', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })
    .factory('PostChargeback', function ($resource) {
        return $resource(webApiBaseUrl + 'ReceiptApi/PostChargeback', {}, {
            post: {
                method: 'POST', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })
    .factory('PostWriteOff', function ($resource) {
        return $resource(webApiBaseUrl + 'ReceiptApi/PostWriteOff', {}, {
            post: {
                method: 'POST', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })
    .factory('PostService', ['$http', function ($http) {
        return {
            postData: function (_url, _data) {
                return $http({
                    url: _url,
                    method: 'POST',
                    data: _data,
                    dataType: 'json',
                    headers: { 'Content-Type': 'application/json', 'token': getToken() }
                });
            }
        };
    }])
    .factory('AttachmentService', ['$http', function ($http) {
        return {
            uploadFile: function (file) {
                return $http({
                    url: webApiBaseUrl + 'InvoiceApi/UploadJsonFile',
                    method: 'POST',
                    data: file,
                    headers: { 'Content-Type': undefined, 'token': getToken() }, //this is important
                    transformRequest: angular.identity //also important
                });
            },
            otherFunctionHere: function (url, stuff) {
                return $http.get(url);
            }
        };
    }])
    .factory('AttachmentUnfactoredService', ['$http', function ($http) {
        return {
            uploadFile: function (file) {
                return $http({
                    url: webApiBaseUrl + 'UnfactoredInvoiceApi/UploadJsonFile',
                    method: 'POST',
                    data: file,
                    headers: { 'Content-Type': undefined, 'token': getToken() }, //this is important
                    transformRequest: angular.identity //also important
                });
            },
            otherFunctionHere: function (url, stuff) {
                return $http.get(url);
            }
        };
    }])
    .factory('DealAttachmentService', ['$http', function ($http) {
        return {
            uploadFile: function (file) {
                return $http({
                    url: webApiBaseUrl + 'ParticipationApi/UploadJsonFile',
                    method: 'POST',
                    data: file,
                    headers: { 'Content-Type': undefined, 'token': getToken() }, //this is important
                    transformRequest: angular.identity //also important
                });
            },
            otherFunctionHere: function (url, stuff) {
                return $http.get(url);
            }
        };
    }])
      .factory('ImageUploadingServiceForClientSide', ['$http', function ($http) {
          return {
              uploadFile: function (file) {
                  return $http({
                      url: webApiBaseUrl + 'ClientCRMApi/UploadImage',
                      method: 'POST',
                      data: file,
                      headers: { 'Content-Type': undefined, 'token': getToken() }, //this is important
                      transformRequest: angular.identity //also important
                  });
              },
              otherFunctionHere: function (url, stuff) {
                  return $http.get(url);
              }
          };
      }])
    .factory('ImageUploadingService', ['$http', function ($http) {
        return {
            uploadFile: function (file) {
                return $http({
                    url: webApiBaseUrl + 'ContactsApi/UploadImage',
                    method: 'POST',
                    data: file,
                    headers: { 'Content-Type': undefined, 'token': getToken() }, //this is important
                    transformRequest: angular.identity //also important
                });
            },
            otherFunctionHere: function (url, stuff) {
                return $http.get(url);
            }
        };
    }])
    .factory('AttachmentUploadingService', ['$http', function ($http) {
        return {
            uploadFile: function (file) {
                return $http({
                    url: webApiBaseUrl + 'CRMApi/UploadFiles',
                    method: 'POST',
                    data: file,
                    headers: { 'Content-Type': undefined, 'token': getToken() }, //this is important
                    transformRequest: angular.identity //also important
                });
            },
            otherFunctionHere: function (url, stuff) {
                return $http.get(url);
            }
        };
    }])
     .factory('ClientAttachmentUploadingService', ['$http', function ($http) {
         return {
             uploadFile: function (file) {
                 return $http({
                     url: webApiBaseUrl + 'ClientCRMApi/UploadFiles',
                     method: 'POST',
                     data: file,
                     headers: { 'Content-Type': undefined, 'token': getToken() }, //this is important
                     transformRequest: angular.identity //also important
                 });
             },
             otherFunctionHere: function (url, stuff) {
                 return $http.get(url);
             }
         };
     }])
    .factory('ClientImageUploadingService', ['$http', function ($http) {
        return {
            uploadFile: function (file) {
                return $http({
                    url: webApiBaseUrl + 'ContactsClientApi/UploadClientImage',
                    method: 'POST',
                    data: file,
                    headers: { 'Content-Type': undefined, 'token': getToken() }, //this is important
                    transformRequest: angular.identity //also important
                });
            },
            otherFunctionHere: function (url, stuff) {
                return $http.get(url);
            }
        };
    }])
    .factory('ClientImageUploadingService', ['$http', function ($http) {
        return {
            uploadFile: function (file) {
                return $http({
                    url: webApiBaseUrl + 'ContactsClientApi/UploadClientImage',
                    method: 'POST',
                    data: file,
                    headers: { 'Content-Type': undefined, 'token': getToken() }, //this is important
                    transformRequest: angular.identity //also important
                });
            },
            otherFunctionHere: function (url, stuff) {
                return $http.get(url);
            }
        };
    }])
    .factory('InvoiceAttachmentService', ['$http', function ($http) {
        return {
            uploadFile: function (file) {
                return $http({
                    url: webApiBaseUrl + 'InvoiceApi/UploadInvoiceAttachment',
                    method: 'POST',
                    data: file,
                    headers: { 'Content-Type': undefined, 'token': getToken() }, //this is important
                    transformRequest: angular.identity //also important
                });
            },
            otherFunctionHere: function (url, stuff) {
                return $http.get(url);
            }
        };
    }])
     .factory('FranInvoiceAttachmentService', ['$http', function ($http) {
         return {
             uploadFile: function (file) {
                 return $http({
                     url: webApiBaseUrl + 'FranchisorInvoiceApi/UploadInvoiceAttachment',
                     method: 'POST',
                     data: file,
                     headers: { 'Content-Type': undefined, 'token': getToken() }, //this is important
                     transformRequest: angular.identity //also important
                 });
             },
             otherFunctionHere: function (url, stuff) {
                 return $http.get(url);
             }
         };
     }])

    .factory('FuelAttachmentService', ['$http', function ($http) {
        return {
            uploadFile: function (file) {
                return $http({
                    url: webApiBaseUrl + 'FuelAdvanceApi/UploadAttachment',
                    method: 'POST',
                    data: file,
                    headers: { 'Content-Type': undefined, 'token': getToken() }, //this is important
                    transformRequest: angular.identity //also important
                });
            },
            otherFunctionHere: function (url, stuff) {
                return $http.get(url);
            }
        };
    }])
    .factory('UploadInvoicesForValidation', ['$http', function ($http) {
        return {
            uploadFile: function (file) {
                return $http({
                    url: webApiBaseUrl + 'InvoiceApi/UploadInvoicesForValidation',
                    method: 'POST',
                    data: file,
                    headers: { 'Content-Type': undefined, 'token': getToken() }, //this is important
                    transformRequest: angular.identity //also important
                });
            },
            otherFunctionHere: function (url, stuff) {
                return $http.get(url);
            }
        };
    }])
    .factory('ClientUploadInvoicesForValidation', ['$http', function ($http) {
        return {
            uploadFile: function (file) {
                return $http({
                    url: webApiBaseUrl + 'ClientInvoiceApi/UploadInvoicesForValidation',
                    method: 'POST',
                    data: file,
                    headers: { 'Content-Type': undefined, 'token': getToken() }, //this is important
                    transformRequest: angular.identity //also important
                });
            },
            otherFunctionHere: function (url, stuff) {
                return $http.get(url);
            }
        };
    }])
    //.factory('SubmitUploadedInvoice', function ($resource) {
    //    return $resource(webApiBaseUrl + 'ClientInvoiceApi/SubmitUploadedInvoice', {}, {
    //        postData: {
    //            method: 'POST', isArray: false,
    //            headers: { 'Content-Type': 'application/json', 'token': getToken() }
    //        }
    //    });
    //})
    .factory('ClientFuelAttachmentService', ['$http', function ($http) {
        return {
            uploadFile: function (file) {
                return $http({
                    url: webApiBaseUrl + 'ClientFuelAdvanceApi/UploadAttachment',
                    method: 'POST',
                    data: file,
                    headers: { 'Content-Type': undefined, 'token': getToken() }, //this is important
                    transformRequest: angular.identity //also important
                });
            },
            otherFunctionHere: function (url, stuff) {
                return $http.get(url);
            }
        };
    }])
    .factory('ClientInvoiceAttachmentService', ['$http', function ($http) {
        return {
            uploadFile: function (file) {
                return $http({
                    url: webApiBaseUrl + 'ClientInvoiceApi/UploadInvoiceAttachment',
                    method: 'POST',
                    data: file,
                    headers: { 'Content-Type': undefined, 'token': getToken() }, //this is important
                    transformRequest: angular.identity //also important
                });
            },
            otherFunctionHere: function (url, stuff) {
                return $http.get(url);
            }
        };
    }])
    .factory('ClientAttachmentService', ['$http', function ($http) {
        return {
            uploadFile: function (file) {
                return $http({
                    url: webApiBaseUrl + 'ClientInvoiceApi/UploadJsonFile',
                    method: 'POST',
                    data: file,
                    headers: { 'Content-Type': undefined, 'token': getToken() }, //this is important
                    transformRequest: angular.identity //also important
                });
            },
            otherFunctionHere: function (url, stuff) {
                return $http.get(url);
            }
        };
    }])
    .factory('PreFundUploadForValidation', ['$http', function ($http) {
        return {
            uploadFile: function (file) {
                return $http({
                    url: webApiBaseUrl + 'PreFundApi/UploadPreFundForValidation',
                    method: 'POST',
                    data: file,
                    headers: { 'Content-Type': undefined, 'token': getToken() }, //this is important
                    transformRequest: angular.identity //also important
                });
            },
            otherFunctionHere: function (url, stuff) {
                return $http.get(url);
            }
        };
    }])
    .factory('CustomerUploadForValidation', ['$http', function ($http) {
        return {
            uploadFile: function (file) {
                return $http({
                    url: webApiBaseUrl + 'ContactsApi/UploadCustomersFromExcel',
                    method: 'POST',
                    data: file,
                    headers: { 'Content-Type': undefined, 'token': getToken() }, //this is important
                    transformRequest: angular.identity //also important
                });
            },
            otherFunctionHere: function (url, stuff) {
                return $http.get(url);
            }
        };
    }])

    .factory('ClientUploadForValidation', ['$http', function ($http) {
        return {
            uploadFile: function (file) {
                return $http({
                    url: webApiBaseUrl + 'ContactsClientApi/UploadClientFromExcel',
                    method: 'POST',
                    data: file,
                    headers: { 'Content-Type': undefined, 'token': getToken() }, //this is important
                    transformRequest: angular.identity //also important
                });
            },
            otherFunctionHere: function (url, stuff) {
                return $http.get(url);
            }
        };

    }])

    .factory('UploadUnfactoredInvoicesForValidation', ['$http', function ($http) {
        return {
            uploadFile: function (file) {
                return $http({
                    url: webApiBaseUrl + 'UnfactoredInvoiceApi/UploadUnfactoredInvoicesForValidation',
                    method: 'POST',
                    data: file,
                    headers: { 'Content-Type': undefined, 'token': getToken() }, //this is important
                    transformRequest: angular.identity //also important
                });
            },
            otherFunctionHere: function (url, stuff) {
                return $http.get(url);
            }
        };
    }])
    .factory('InvoiceUnapprove', function ($resource) {
        return $resource(webApiBaseUrl + 'PaymentApi/UnapproveInvoice', {}, {
            post: {
                method: 'POST', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })
    .factory('InvoiceVerificationAttachmentService', ['$http', function ($http) {
        return {
            
            uploadFile: function (file) {
                debugger
                return $http({
                    url: webApiBaseUrl + 'InvoiceApi/UploadVerificationInvoiceAttachment',
                    method: 'POST',
                    data: file,
                    headers: { 'Content-Type': undefined, 'token': getToken() }, //this is important
                    transformRequest: angular.identity //also important
                });
            },
            otherFunctionHere: function (url, stuff) {
                return $http.get(url);
            }
        };
    }])
     .factory('FranchisorInvoiceVerificationAttachmentService', ['$http', function ($http) {
         return {
             uploadFile: function (file) {
                 return $http({
                     url: webApiBaseUrl + 'FranchisorInvoiceApi/UploadVerificationInvoiceAttachment',
                     method: 'POST',
                     data: file,
                     headers: { 'Content-Type': undefined, 'token': getToken() }, //this is important
                     transformRequest: angular.identity //also important
                 });
             },
             otherFunctionHere: function (url, stuff) {
                 return $http.get(url);
             }
         };
     }])
//-------------------------PURCHASE ORDER--------------------------------------------STARTS//
.factory('POTermList', function ($resource) {
    return $resource(webApiBaseUrl + 'PurchaseOrderApi/GetPOTerms', {}, {
        query: {
            method: 'GET', isArray: false,
            headers: { 'Content-Type': 'application/json', 'token': getToken() }
        }
    });
})
.factory('ClientPOTermList', function ($resource) {
    return $resource(webApiBaseUrl + 'ClientPurchaseOrderApi/GetPOTerms', {}, {
        query: {
            method: 'GET', isArray: false,
            headers: { 'Content-Type': 'application/json', 'token': getToken() }
        }
    });
})
.factory('SupplierList', function ($resource) {
    return $resource(webApiBaseUrl + 'PurchaseOrderApi/GetSupplierList', {}, {
        query: {
            method: 'GET', isArray: false,
            headers: { 'Content-Type': 'application/json', 'token': getToken() }
        }
    });
})
.factory('ClientSupplierList', function ($resource) {
    return $resource(webApiBaseUrl + 'ClientPurchaseOrderApi/GetSupplierList', {}, {
        query: {
            method: 'GET', isArray: false,
            headers: { 'Content-Type': 'application/json', 'token': getToken() }
        }
    });
})
.factory('ClientSupplierList', function ($resource) {
    return $resource(webApiBaseUrl + 'ClientPurchaseOrderApi/GetSupplierList', {}, {
        query: {
            method: 'GET', isArray: false,
            headers: { 'Content-Type': 'application/json', 'token': getToken() }
        }
    });
})
.factory('POList', function ($resource) {
    return $resource(webApiBaseUrl + 'PurchaseOrderApi/GetPendingPOs', {}, {
        post: {
            method: 'POST', isArray: false,
            headers: { 'Content-Type': 'application/json', 'token': getToken() }
        }
    });
})
.factory('POPaymentList', function ($resource) {
    return $resource(webApiBaseUrl + 'PurchaseOrderApi/GetPOPayments', {}, {
        post: {
            method: 'POST', isArray: false,
            headers: { 'Content-Type': 'application/json', 'token': getToken() }
        }
    });
})


.factory('POAttachmentService', ['$http', function ($http) {
    return {
        uploadFile: function (file) {
            return $http({
                url: webApiBaseUrl + 'PurchaseOrderApi/UploadPOJsonFile',
                method: 'POST',
                data: file,
                headers: { 'Content-Type': undefined, 'token': getToken() }, //this is important
                transformRequest: angular.identity //also important
            });
        },
        otherFunctionHere: function (url, stuff) {
            return $http.get(url);
        }
    };
}])
.factory('ClientPOAttachmentService', ['$http', function ($http) {
    return {
        uploadFile: function (file) {
            return $http({
                url: webApiBaseUrl + 'ClientPurchaseOrderApi/UploadPOJsonFile',
                method: 'POST',
                data: file,
                headers: { 'Content-Type': undefined, 'token': getToken() }, //this is important
                transformRequest: angular.identity //also important
            });
        },
        otherFunctionHere: function (url, stuff) {
            return $http.get(url);
        }
    };
}])
.factory('PurchaseOrderAttachmentService', ['$http', function ($http) {
    return {
        uploadFile: function (file) {
            return $http({
                url: webApiBaseUrl + 'PurchaseOrderApi/UploadPurchaseOrderAttachment',
                method: 'POST',
                data: file,
                headers: { 'Content-Type': undefined, 'token': getToken() }, //this is important
                transformRequest: angular.identity //also important
            });
        },
        otherFunctionHere: function (url, stuff) {
            return $http.get(url);
        }
    };
}])
.factory('ClientPurchaseOrderAttachmentService', ['$http', function ($http) {
    return {
        uploadFile: function (file) {
            return $http({
                url: webApiBaseUrl + 'ClientPurchaseOrderApi/UploadPurchaseOrderAttachment',
                method: 'POST',
                data: file,
                headers: { 'Content-Type': undefined, 'token': getToken() }, //this is important
                transformRequest: angular.identity //also important
            });
        },
        otherFunctionHere: function (url, stuff) {
            return $http.get(url);
        }
    };
}])
.factory('UpdatePOStatus', function ($resource) {
    return $resource(webApiBaseUrl + 'PurchaseOrderApi/UpdatePurchaseOrderStatus', {}, {
        post: {
            method: 'POST', isArray: false,
            headers: { 'Content-Type': 'application/json', 'token': getToken() }
        }
    });
})
.factory('UpdatePOSupplierInvoiceStatus', function ($resource) {
    return $resource(webApiBaseUrl + 'PurchaseOrderApi/UpdatePurchaseOrderSupplierInvoiceStatus', {}, {
        post: {
            method: 'POST', isArray: false,
            headers: { 'Content-Type': 'application/json', 'token': getToken() }
        }
    });
})
.factory('POPaymentAdjustmentList', function ($resource) {
    return $resource(webApiBaseUrl + 'PurchaseOrderApi/GetPaymentAdjustmentList', {}, {
        query: {
            method: 'GET', isArray: false,
            headers: { 'Content-Type': 'application/json', 'token': getToken() }
        }
    });
})
.factory('PostPOPayment', function ($resource) {
    return $resource(webApiBaseUrl + 'PurchaseOrderApi/PostPOPayment', {}, {
        post: {
            method: 'post', isArray: false,
            headers: { 'Content-Type': 'application/json', 'token': getToken() }
        }
    });
})
.factory('POReceiptList', function ($resource) {
    return $resource(webApiBaseUrl + 'PurchaseOrderApi/GetPOReceipts', {}, {
        post: {
            method: 'POST', isArray: false,
            headers: { 'Content-Type': 'application/json', 'token': getToken() }
        }
    });
})
.factory('PostPOReceipt', function ($resource) {
    return $resource(webApiBaseUrl + 'PurchaseOrderApi/PostPOReceipt', {}, {
        post: {
            method: 'post', isArray: false,
            headers: { 'Content-Type': 'application/json', 'token': getToken() }
        }
    });
})
.factory('POClosedList', function ($resource) {
    return $resource(webApiBaseUrl + 'PurchaseOrderApi/GetClosedPOs', {}, {
        post: {
            method: 'POST', isArray: false,
            headers: { 'Content-Type': 'application/json', 'token': getToken() }
        }
    });
})
//-------------------------PURCHASE ORDER--------------------------------------------ENDS//
.factory('ClientUploadInvoicesForValidation', ['$http', function ($http) {
    return {
        uploadFile: function (file) {
            return $http({
                url: webApiBaseUrl + 'ClientInvoiceApi/UploadInvoicesForValidation',
                method: 'POST',
                data: file,
                headers: { 'Content-Type': undefined, 'token': getToken() }, //this is important
                transformRequest: angular.identity //also important
            });
        },
        otherFunctionHere: function (url, stuff) {
            return $http.get(url);
        }
    };
}])
.factory('GetInvoiceData', function ($resource) {
    return $resource(webApiBaseUrl + 'ClientInvoiceApi/GetInvoiceData', {}, {
        query: {
            method: 'GET', isArray: false,
            headers: { 'Content-Type': 'application/json', 'token': getToken() }
        }
    });
})
.factory('PostLenders', function ($resource) {
    return $resource(webApiBaseUrl + 'LenderApi/PostLender', {}, {
        post: {
            method: 'POST', isArray: false,
            headers: { 'Content-Type': 'application/json', 'token': getToken() }
        }
    });
})

    .factory('PostFunder', function ($resource) {
        return $resource(webApiBaseUrl + 'FunderApi/PostFunder', {}, {
            post: {
                method: 'POST', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })
//-------------------------CLIENT LOAN--------------------------------------------STARTS//
.factory('PostClientLoanPayments', function ($resource) {
    return $resource(webApiBaseUrl + 'ClientLoanPaymentApi/PostClientLoanPayments', {}, {
        post: {
            method: 'POST', isArray: false,
            headers: { 'Content-Type': 'application/json', 'token': getToken() }
        }
    });
})
.factory('PostClientLoanChargeback', function ($resource) {
    return $resource(webApiBaseUrl + 'ClientLoanPaymentApi/LoanChargebackPost', {}, {
        post: {
            method: 'POST', isArray: false,
            headers: { 'Content-Type': 'application/json', 'token': getToken() }
        }
    });
})
.factory('GetClientLoanTypes', function ($resource) {
    return $resource(webApiBaseUrl + 'ClientLoanTermApi/GetClientLoanTypes', {}, {
        query: {
            method: 'GET', isArray: false,
            headers: { 'Content-Type': 'application/json', 'token': getToken() }
        }
    });
})
.factory('GetClientLoanPaymentFrequencies', function ($resource) {
    return $resource(webApiBaseUrl + 'ClientLoanTermApi/GetClientLoanPaymentFrequencies', {}, {
        query: {
            method: 'GET', isArray: false,
            headers: { 'Content-Type': 'application/json', 'token': getToken() }
        }
    });
})
.factory('GetClientLoanLengthUnits', function ($resource) {
    return $resource(webApiBaseUrl + 'ClientLoanTermApi/GetClientLoanLengthUnits', {}, {
        query: {
            method: 'GET', isArray: false,
            headers: { 'Content-Type': 'application/json', 'token': getToken() }
        }
    });
})
//-------------------------CLIENT LOAN--------------------------------------------ENDS//

    .factory('ClientUploadInvoicesForValidation', ['$http', function ($http) {
        return {
            uploadFile: function (file) {
                return $http({
                    url: webApiBaseUrl + 'ClientInvoiceApi/UploadInvoicesForValidation',
                    method: 'POST',
                    data: file,
                    headers: { 'Content-Type': undefined, 'token': getToken() }, //this is important
                    transformRequest: angular.identity //also important
                });
            },
            otherFunctionHere: function (url, stuff) {
                return $http.get(url);
            }
        };
    }])
    .factory('GetInvoiceData', function ($resource) {
        return $resource(webApiBaseUrl + 'ClientInvoiceApi/GetInvoiceData', {}, {
            query: {
                method: 'GET', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })
    .factory('PostLenders', function ($resource) {
        return $resource(webApiBaseUrl + 'LenderApi/PostLender', {}, {
            post: {
                method: 'POST', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })
    .factory('PostClientLoanPayments', function ($resource) {
        return $resource(webApiBaseUrl + 'ClientLoanPaymentApi/PostClientLoanPayments', {}, {
            post: {
                method: 'POST', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })
    .factory('PostClientLoanChargeback', function ($resource) {
        return $resource(webApiBaseUrl + 'ClientLoanPaymentApi/LoanChargebackPost', {}, {
            post: {
                method: 'POST', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })
    .factory('GetClientLoanTypes', function ($resource) {
        return $resource(webApiBaseUrl + 'ClientLoanTermApi/GetClientLoanTypes', {}, {
            query: {
                method: 'GET', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })
    .factory('GetClientLoanPaymentFrequencies', function ($resource) {
        return $resource(webApiBaseUrl + 'ClientLoanTermApi/GetClientLoanPaymentFrequencies', {}, {
            query: {
                method: 'GET', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })
    .factory('GetClientLoanLengthUnits', function ($resource) {
        return $resource(webApiBaseUrl + 'ClientLoanTermApi/GetClientLoanLengthUnits', {}, {
            query: {
                method: 'GET', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })

    .factory('GetClientList', ['$http', '$localStorage', function ($http, $localStorage) {
        return {
            get: function () {
                if (isEmpty($localStorage.clientList) == false) {
                    $http({
                        url: webApiBaseUrl + 'InvoiceApi/GetFactorClients',
                        method: 'POST',
                        dataType: 'json',
                        headers: { 'Content-Type': 'application/json', 'token': getToken() }
                    }).then(function (data) {
                        $localStorage.clientList = data;
                        return $localStorage.clientList;
                    });

                } else {
                    return $localStorage.clientList;
                }
            }
        };
    }])
    //.factory('AutomaticReportsList', function ($resource) {
    //    return $resource(webApiBaseUrl + 'AutomaticReportsApi/GetAutomaticReportsList', {}, {
    //        post: {
    //            method: 'POST', isArray: false,
    //            headers: { 'Content-Type': 'application/json', 'token': getToken() }
    //        }
    //    });
    //})

    .factory('FrequencyList', function ($resource) {
        return $resource(webApiBaseUrl + 'AutomaticReportsApi/GetFrequencyMasterList', {}, {
            post: {
                method: 'POST', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })
    .factory('GetActionList', ['$http', '$localStorage', function ($http, $localStorage) {
        return {
            get: function () {
                if (isEmpty($localStorage.actionList) == false) {
                    var res = $http({
                        url: webApiBaseUrl + 'SetupApi/GetModules',
                        method: 'POST',
                        dataType: 'json',
                        headers: { 'Content-Type': 'application/json', 'token': getToken() }
                    });
                    return res;
                } else {
                    return $localStorage.actionList;
                }
            }
        }
    }])

    .factory('GetCustomStatusColor', function ($resource) {
        return $resource(webApiBaseUrl + 'PaymentApi/GetCustomStatusColor', {}, {
            query: {
                method: 'GET', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })

    .factory('LOAAttachmentService', ['$http', function ($http) {
        return {
            uploadFile: function (file) {
                return $http({
                    url: webApiBaseUrl + 'ContactsClientApi/UploadLOAJsonFile',
                    method: 'POST',
                    data: file,
                    headers: { 'Content-Type': undefined, 'token': getToken() }, //this is important
                    transformRequest: angular.identity //also important
                });
            },
            otherFunctionHere: function (url, stuff) {
                return $http.get(url);
            }
        };
    }])
    .factory('UserGuideAttachmentService', ['$http', function ($http) {
        return {
            uploadFile: function (file) {
                return $http({
                    url: webApiBaseUrl + 'UserGuideApi/UploadUserGuideJsonFile',
                    method: 'POST',
                    data: file,
                    headers: { 'Content-Type': undefined, 'token': getToken() }, //this is important
                    transformRequest: angular.identity //also important
                });
            },
            otherFunctionHere: function (url, stuff) {
                return $http.get(url);
            }
        };
    }])
    .factory('ReceiptAdjuestmetList', function ($resource) {
        return $resource(webApiBaseUrl + 'ReceiptApi/ReceiptAdjuestmetList', {}, {
            query: {
                method: 'GET', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })
    .factory('ApprovalStaffManagerList', function ($resource) {
        return $resource(webApiBaseUrl + 'InvoiceApi/GetApprovalStaffManager', {}, {
            post: {
                method: 'POST', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })

  .factory('PaymentNotificationList', function ($resource) {
      return $resource(webApiBaseUrl + 'NotificationApi/PaymentNotification', {}, {
          post: {
              method: 'POST', isArray: false,
              headers: { 'Content-Type': 'application/json', 'token': getToken() }
          }
      });
  })

    .factory('GetFunderBankAccounts', function ($resource) {
        return $resource(webApiBaseUrl + 'FunderApi/GetFunderBankAccounts', {}, {
            query: {
                method: 'GET', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })

    .factory('LeadAttachmentService', ['$http', function ($http) {
        return {
            uploadFile: function (file) {
                return $http({
                    url: webApiBaseUrl + 'CRMApi/UploadAttachmentJsonFile',
                    method: 'POST',
                    data: file,
                    headers: { 'Content-Type': undefined, 'token': getToken() }, //this is important
                    transformRequest: angular.identity //also important
                });
            },
            otherFunctionHere: function (url, stuff) {
                return $http.get(url);
            }
        };
    }])

     .factory('UpdateInvoiceDetails', function ($resource) {
         return $resource(webApiBaseUrl + 'InvoiceApi/UpdateInvoiceFromVerification', {}, {
             post: {
                 method: 'post', isArray: false,
                 headers: { 'Content-Type': 'application/json', 'token': getToken() }
             }
         });
     })

    .factory('ReceiptNotificationList', function ($resource) {
        return $resource(webApiBaseUrl + 'NotificationApi/ReceiptNotification', {}, {
            post: {
                method: 'POST', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })

    .factory('RebateNotificationList', function ($resource) {
        return $resource(webApiBaseUrl + 'NotificationApi/RebateNotification', {}, {
            post: {
                method: 'POST', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })

    .factory('ReceiptIncomeNotificationList', function ($resource) {
        return $resource(webApiBaseUrl + 'NotificationApi/ReceiptIncomeNotification', {}, {
            post: {
                method: 'POST', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })
    .factory('CapitalReceiptIncomeNotificationList', function ($resource) {
        return $resource(webApiBaseUrl + 'NotificationApi/CapitalReceiptIncomeNotification', {}, {
            post: {
                method: 'POST', isArray: false,
                headers: { 'Content-Type': 'application/json', 'token': getToken() }
            }
        });
    })
    //-------------------------RemoveValidation--------------------------------------------ENDS//
.factory('removeValidation', [function () {
    return {
        RemoveValidation: function (_containerId) {
            $("#" + _containerId + " :input").each(function () {

                if ($(this).attr("emailid") !== undefined) {
                    if ($(this).attr("emailid").toString().toLowerCase() == "true") {
                        if ($(this).val() == "") {
                            $(this).removeClass("md-input-danger");
                            $(this).siblings("span").remove();
                        }

                    }
                }
            });
        }
    };
}])
    .config(["$httpProvider",
        function ($httpProvider) {
            var interceptor = ["$q", "$rootScope", "$location",
                function ($q, $rootScope, $location) {
                    var success = function (response) {
                        // pass through
                        return response;
                    },
                        error = function (response) {
                            if (response.status === 401) {
                                alert("Unauthorized");
                            }

                            return $q.reject(response);
                        };
                    return function (httpPromise) {
                        return httpPromise.then(success, error);
                    };
                }];
            $httpProvider.interceptors.push(interceptor);
        }
    ]);

angular.module('FactorFoxApp.AppServices').service('LocalData', [function () {
    this.clientList = {};// getClientList();
    //function getClientList() {
    //    ClientList.post({}, function (data) {
    //        $localStorage.clientList = data;
    //        return $localStorage.clientList;
    //    });
    //}
    this.clientList.DataList = [];
    this.customerList = [];
    this.selectedfactorclientid = 0;
    this.getProductSearchTypes = function () {
        return [
            { id: "0", name: "Please select..." },
            { id: "CategoryId", name: "Category ID" },
            { id: "CategoryName", name: "Category Name" },
            { id: "ProductId", name: "Product ID" },
            { id: "ProductName", name: "Product Name" }
        ];
    }
    this.getPageSizeList = function () {
        return [
            { value: 10, text: "10" },
            { value: 50, text: "50" },
            { value: 100, text: "100" },
            { value: 300, text: "300" },
            { value: 500, text: "500" }
        ];
    }
    this.selectedInvoiceid = 0;
    this.selectedInvoices = "";
    this.version = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
    this.currectmodalInstance = null;
    this.currectselectedItem = null;
}]);

