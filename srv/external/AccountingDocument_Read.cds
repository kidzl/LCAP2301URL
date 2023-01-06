/* checksum : be27436430ffab58555f98715d92f751 */
@cds.external : true
@m.IsDefaultEntityContainer : 'true'
@sap.message.scope.supported : 'true'
@sap.supported.formats : 'atom json xlsx'
service AccountingDocument_Read {};

@cds.external : true
@cds.persistence.skip : true
@sap.creatable : 'false'
@sap.updatable : 'false'
@sap.deletable : 'false'
@sap.content.version : '1'
@sap.label : 'Operational Accounting Document Items'
entity AccountingDocument_Read.A_OperationalAcctgDocItemCube {
  @sap.display.format : 'UpperCase'
  @sap.label : 'Company Code'
  key CompanyCode : String(4) not null;
  @sap.display.format : 'NonNegative'
  @sap.label : 'Fiscal Year'
  key FiscalYear : String(4) not null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Journal Entry'
  key AccountingDocument : String(10) not null;
  @sap.display.format : 'NonNegative'
  @sap.label : 'Posting View Item'
  @sap.quickinfo : 'Journal Entry Posting View Item'
  key AccountingDocumentItem : String(3) not null;
  @sap.label : 'Company Code Name'
  CompanyCodeName : String(25) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Chart of Accounts'
  ChartOfAccounts : String(4) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Line item ID'
  @sap.quickinfo : 'Identification of the Line Item'
  AccountingDocumentItemType : String(1) null;
  @sap.display.format : 'Date'
  @sap.label : 'Clearing Date'
  ClearingDate : Date null;
  @sap.display.format : 'Date'
  @sap.label : 'Clrg Creation Date'
  @sap.quickinfo : 'Clearing Creation Date'
  ClearingCreationDate : Date null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Clearing Journal Entry'
  ClearingAccountingDocument : String(10) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Is Cleared'
  @sap.quickinfo : 'Clearing Status: Is Cleared'
  IsCleared : Boolean null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Posting Key'
  PostingKey : String(2) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Account Type'
  FinancialAccountType : String(1) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Special G/L'
  @sap.quickinfo : 'Special G/L Indicator'
  SpecialGLCode : String(1) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Sp. G/L Trans.Type'
  @sap.quickinfo : 'Special G/L Transaction Type'
  SpecialGLTransactionType : String(1) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Debit/Credit Code'
  DebitCreditCode : String(1) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Business Area'
  BusinessArea : String(4) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Business Area Name'
  BusinessAreaName : String(30) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Partner Bus. Area'
  @sap.quickinfo : 'Partner Business Area'
  PartnerBusinessArea : String(4) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax Code'
  @sap.quickinfo : 'Tax on Sales/Purchases Code'
  TaxCode : String(2) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Withholding Tax Code'
  WithholdingTaxCode : String(2) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax type'
  @sap.quickinfo : 'Tax Type'
  TaxType : String(1) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Transaction Key'
  TransactionTypeDetermination : String(3) null;
  @sap.display.format : 'Date'
  @sap.label : 'Value Date'
  ValueDate : Date null;
  @sap.label : 'Assignment Reference'
  AssignmentReference : String(18) null;
  @sap.label : 'Item Text'
  DocumentItemText : String(50) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Trading Partner'
  @sap.quickinfo : 'Company ID of Trading Partner'
  PartnerCompany : String(6) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Financial Transaction Type'
  FinancialTransactionType : String(3) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Corporate Group Account'
  CorporateGroupAccount : String(10) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Planning Level'
  PlanningLevel : String(2) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Controlling Area'
  ControllingArea : String(4) null;
  @sap.label : 'Ctrlg Area Name'
  @sap.quickinfo : 'Controlling Area Name'
  ControllingAreaName : String(25) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Cost Center'
  CostCenter : String(10) null;
  @sap.label : 'Cost Center Name'
  CostCenterName : String(20) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Project'
  Project : String(24) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Order ID'
  OrderID : String(12) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Billing Document'
  BillingDocument : String(10) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Sales Document'
  SalesDocument : String(10) null;
  @sap.display.format : 'NonNegative'
  @sap.label : 'Sales Document Item'
  SalesDocumentItem : String(6) null;
  @sap.display.format : 'NonNegative'
  @sap.label : 'Schedule Line'
  ScheduleLine : String(4) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Fixed Asset'
  MasterFixedAsset : String(12) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Asset Subnumber'
  FixedAsset : String(4) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Ast Transaction Type'
  @sap.quickinfo : 'Asset Transaction Type'
  AssetTransactionType : String(3) null;
  @sap.display.format : 'Date'
  @sap.label : 'Asset Value Date'
  AssetValueDate : Date null;
  @sap.display.format : 'NonNegative'
  @sap.label : 'Personnel Number'
  PersonnelNumber : String(8) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Is Sales Related'
  IsSalesRelated : Boolean null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Line Item Display Enabled'
  @sap.quickinfo : 'Indicator: Can Line Items Be Displayed by Account?'
  LineItemDisplayIsEnabled : Boolean null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Open Item Management'
  @sap.quickinfo : 'Managed on an Open Item Basis'
  IsOpenItemManaged : String(1) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Is Not Cash Discount Liable'
  IsNotCashDiscountLiable : Boolean null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Is Automatically Created'
  IsAutomaticallyCreated : Boolean null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Is Used In Payment Transaction'
  IsUsedInPaymentTransaction : Boolean null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Operational G/L Acct'
  @sap.quickinfo : 'Operational General Ledger Account'
  OperationalGLAccount : String(10) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'G/L Account'
  GLAccount : String(10) null;
  @sap.label : 'G/L Account Name'
  GLAccountName : String(30) null;
  @sap.label : 'G/L Account Long Name'
  GLAccountLongName : String(50) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Customer'
  @sap.quickinfo : 'Customer Number'
  Customer : String(10) null;
  @sap.label : 'Name of Customer'
  CustomerName : String(80) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Supplier'
  Supplier : String(10) null;
  @sap.label : 'Name of Supplier'
  SupplierName : String(80) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Branch Account'
  BranchAccount : String(10) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Is Balance Sheet Account'
  IsBalanceSheetAccount : Boolean null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Profit Loss Account Type'
  ProfitLossAccountType : String(2) null;
  @sap.label : 'Special G/L Assignmt'
  @sap.quickinfo : 'Assignment Number for Special G/L Accounts'
  SpecialGLAccountAssignment : String(18) null;
  @sap.display.format : 'Date'
  @sap.label : 'Due Calculation Base Date'
  DueCalculationBaseDate : Date null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Payment Terms'
  @sap.quickinfo : 'Terms of Payment Key'
  PaymentTerms : String(4) null;
  @sap.label : 'Cash Discount Days 1'
  CashDiscount1Days : Decimal(3, 0) null;
  @sap.label : 'Cash Discount Days 2'
  CashDiscount2Days : Decimal(3, 0) null;
  @sap.label : 'Days Net'
  @sap.quickinfo : 'Net Payment Terms Period'
  NetPaymentDays : Decimal(3, 0) null;
  @sap.label : 'Disc. Percent 1'
  @sap.quickinfo : 'Cash Discount Percentage 1'
  CashDiscount1Percent : Decimal(5, 3) null;
  @sap.label : 'Disc. Percent 2'
  @sap.quickinfo : 'Cash Discount Percentage 2'
  CashDiscount2Percent : Decimal(5, 3) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Payment Method'
  PaymentMethod : String(1) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Payment Blocking Reason'
  PaymentBlockingReason : String(1) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Fixed Cash Discount'
  FixedCashDiscount : String(1) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'House Bank'
  @sap.quickinfo : 'House Bank Key'
  HouseBank : String(5) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'BP Bank Account'
  @sap.quickinfo : 'Business Partner Bank Account Internal ID'
  BPBankAccountInternalID : String(4) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax Distr. Code 1'
  @sap.quickinfo : 'Tax Code 1 for Distribution'
  TaxDistributionCode1 : String(2) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax Distr. Code 2'
  @sap.quickinfo : 'Tax Code 2 for Distribution'
  TaxDistributionCode2 : String(2) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax Distr. Code 3'
  @sap.quickinfo : 'Tax Code 3 for Distribution'
  TaxDistributionCode3 : String(2) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Invoice Reference'
  InvoiceReference : String(10) null;
  @sap.display.format : 'NonNegative'
  @sap.label : 'Invoice Reference Fiscal Year'
  InvoiceReferenceFiscalYear : String(4) null;
  @sap.display.format : 'NonNegative'
  @sap.label : 'Invoice Item Reference'
  InvoiceItemReference : String(3) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Follow-On Doc.Type'
  @sap.quickinfo : 'Follow-On Document Type'
  FollowOnDocumentType : String(1) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'SCB Indicator'
  @sap.quickinfo : 'State Central Bank Indicator'
  StateCentralBankPaymentReason : String(3) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Supplying Ctry/Reg.'
  @sap.quickinfo : 'Supplying Country/Region'
  SupplyingCountry : String(3) null;
  @sap.display.format : 'NonNegative'
  @sap.label : 'Invoice List'
  InvoiceList : String(8) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Bill/Exchange Usage'
  @sap.quickinfo : 'Bill of Exchange Usage Type'
  BillOfExchangeUsage : String(1) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Dunning Key'
  DunningKey : String(1) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Dunning Blocking Reason'
  DunningBlockingReason : String(1) null;
  @sap.display.format : 'Date'
  @sap.label : 'Last Dunned'
  @sap.quickinfo : 'Date of Last Dunning Notice'
  LastDunningDate : Date null;
  @sap.display.format : 'NonNegative'
  @sap.label : 'Dunning Level'
  DunningLevel : String(1) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Dunning Area'
  DunningArea : String(2) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'WHT Certificate'
  @sap.quickinfo : 'Withholding Tax Certificate'
  WithholdingTaxCertificate : String(10) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Material'
  @sap.quickinfo : 'Material Number'
  Material : String(40) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Product'
  @sap.quickinfo : 'Product Number'
  Product : String(40) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Plant'
  Plant : String(4) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Purchasing Document'
  PurchasingDocument : String(10) null;
  @sap.display.format : 'NonNegative'
  @sap.label : 'Purchasing Doc. Item'
  @sap.quickinfo : 'Purchasing Document Item'
  PurchasingDocumentItem : String(5) null;
  @sap.display.format : 'NonNegative'
  @sap.label : 'Account Assgmt No.'
  @sap.quickinfo : 'Sequential Number of Account Assignment'
  AccountAssignmentNumber : String(2) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Is completely delivered'
  IsCompletelyDelivered : Boolean null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Material Price Control'
  @sap.quickinfo : 'Material Price Control Indicator'
  MaterialPriceControl : String(1) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Valuation Area'
  ValuationArea : String(4) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Valuation Type'
  InventoryValuationType : String(10) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'VAT Registration'
  VATRegistration : String(20) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'C/R of Destination'
  @sap.quickinfo : 'Country/Region of Destination for Delivery of Goods'
  DelivOfGoodsDestCountry : String(3) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Payment Difference Reason'
  PaymentDifferenceReason : String(3) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Profit Center'
  ProfitCenter : String(10) null;
  @sap.label : 'Profit Center Name'
  @sap.quickinfo : 'Description of Profit Center'
  ProfitCenterName : String(20) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Joint Venture'
  JointVenture : String(6) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Recovery Indicator'
  JointVentureCostRecoveryCode : String(2) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Joint Venture Equity Group'
  JointVentureEquityGroup : String(3) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Treasury Contract Type'
  TreasuryContractType : String(1) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Asset Contract'
  AssetContract : String(13) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Flow Type'
  CashFlowType : String(4) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax Jurisdiction'
  TaxJurisdiction : String(15) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Real Estate Object'
  @sap.quickinfo : 'Internal Key for Real Estate Object'
  RealEstateObject : String(40) null;
  @sap.display.format : 'Date'
  @sap.label : 'Reference Date'
  @sap.quickinfo : 'Reference Date for Settlement'
  SettlementReferenceDate : Date null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Commitment Item'
  CommitmentItem : String(24) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Cost Object'
  CostObject : String(12) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Network'
  @sap.quickinfo : 'Network Number for Account Assignment'
  ProjectNetwork : String(12) null;
  @sap.display.format : 'NonNegative'
  @sap.label : 'Order Internal Bill of Operations'
  @sap.quickinfo : 'Order Internal Bill of Operations ID'
  OrderInternalBillOfOperations : String(10) null;
  @sap.display.format : 'NonNegative'
  @sap.label : 'Order Internal Bill of Operations Item'
  OrderIntBillOfOperationsItem : String(8) null;
  @sap.display.format : 'NonNegative'
  @sap.label : 'WBS Element'
  @sap.quickinfo : 'WBS Element (Internal Number Without Conversion)'
  WBSElementInternalID : String(8) null;
  @sap.display.format : 'NonNegative'
  @sap.label : 'Profitability Segment (Deprecated)'
  @sap.quickinfo : 'Deprecated: Profitability Segment'
  ProfitabilitySegment : String(10) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Joint Venture Equity Type'
  JointVentureEquityType : String(3) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Is EU Triangular Deal'
  IsEUTriangularDeal : Boolean null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Origin Group'
  @sap.quickinfo : 'Origin Group as Subdivision of Cost Element'
  CostOriginGroup : String(4) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Co Crcy Detn Meth'
  @sap.quickinfo : 'Company Code Currency Determination Method'
  CompanyCodeCurrencyDetnMethod : String(1) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Clearing Is Reversed'
  ClearingIsReversed : Boolean null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Payt Method Suplmnt'
  @sap.quickinfo : 'Payment Method Supplement'
  PaymentMethodSupplement : String(2) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Altern. G/L Account'
  @sap.quickinfo : 'Alternative G/L Account Number In Company Code'
  AlternativeGLAccount : String(10) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Funds Center'
  @sap.quickinfo : 'Funds Management Center'
  FundsCenter : String(16) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Fund'
  Fund : String(10) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Partner Profit Center'
  PartnerProfitCenter : String(10) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Reference 1 ID By Business Partner'
  @sap.quickinfo : 'ID of Reference 1 by Business Partner'
  Reference1IDByBusinessPartner : String(12) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Reference 2 ID By Business Partner'
  @sap.quickinfo : 'ID of Reference 2 by Business Partner'
  Reference2IDByBusinessPartner : String(12) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Is Negative Posting'
  IsNegativePosting : Boolean null;
  @sap.display.format : 'NonNegative'
  @sap.label : 'Payment Card Item'
  PaymentCardItem : String(3) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Payment Card Payment Settlement'
  PaymentCardPaymentSettlement : String(10) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Credit Control Area'
  CreditControlArea : String(4) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Reference 3 ID By Business Partner'
  @sap.quickinfo : 'ID of Reference 3 by Business Partner'
  Reference3IDByBusinessPartner : String(20) null;
  @sap.display.format : 'NonNegative'
  @sap.label : 'Data Exchange Instruction 1'
  DataExchangeInstruction1 : String(2) null;
  @sap.display.format : 'NonNegative'
  @sap.label : 'Data Exchange Instruction 2'
  DataExchangeInstruction2 : String(2) null;
  @sap.display.format : 'NonNegative'
  @sap.label : 'Data Exchange Instruction 3'
  DataExchangeInstruction3 : String(2) null;
  @sap.display.format : 'NonNegative'
  @sap.label : 'Data Exchange Instruction 4'
  DataExchangeInstruction4 : String(2) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Region'
  @sap.quickinfo : 'Region (State, Province, County)'
  Region : String(3) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Payment Sent'
  @sap.quickinfo : 'Indicator: Payment Order Exists for this Item'
  HasPaymentOrder : Boolean null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Payment Reference'
  PaymentReference : String(30) null;
  @sap.display.format : 'Date'
  @sap.label : 'Tx Determination Dte'
  @sap.quickinfo : 'Date for Determination of Tax Rates'
  TaxDeterminationDate : Date null;
  @sap.label : 'Clearing Item'
  ClearingItem : Decimal(5, 0) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Business Place'
  BusinessPlace : String(4) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax Section'
  TaxSection : String(4) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Activity Type'
  CostCtrActivityType : String(6) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Accounts Receivable Is Pledged'
  AccountsReceivableIsPledged : String(2) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Business Process'
  BusinessProcess : String(12) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Grant'
  GrantID : String(20) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Functional Area'
  FunctionalArea : String(16) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Functional Area Name'
  FunctionalAreaName : String(30) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Customer Is In Execution'
  CustomerIsInExecution : Boolean null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Funded Program'
  FundedProgram : String(24) null;
  @sap.display.format : 'NonNegative'
  @sap.label : 'Fiscal Year of Clearing Journal Entry'
  ClearingDocFiscalYear : String(4) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Journal Entry Item'
  @sap.quickinfo : 'Ledger Journal Entry Item'
  LedgerGLLineItem : String(6) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Segment'
  @sap.quickinfo : 'Segment for Segmental Reporting'
  Segment : String(10) null;
  @sap.label : 'Segment Name'
  SegmentName : String(50) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Partner Segment'
  @sap.quickinfo : 'Partner Segment for Segmental Reporting'
  PartnerSegment : String(10) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Partner Func. Area'
  @sap.quickinfo : 'Partner Functional Area'
  PartnerFunctionalArea : String(16) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'House Bank Account'
  HouseBankAccount : String(5) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Cost Element'
  CostElement : String(10) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'SEPA Mandate'
  @sap.quickinfo : 'Unique Reference to Mandate for each Payee'
  SEPAMandate : String(35) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Reference Document Type'
  ReferenceDocumentType : String(5) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Original Reference Document'
  OriginalReferenceDocument : String(20) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Ref. Doc. Lgcl Syst.'
  @sap.quickinfo : 'Logical System of Reference Document'
  ReferenceDocumentLogicalSystem : String(10) null;
  @sap.display.format : 'NonNegative'
  @sap.label : 'Journal Entry Line Item Reference'
  AccountingDocumentItemRef : String(10) null;
  @sap.display.format : 'NonNegative'
  @sap.label : 'Fiscal Period'
  FiscalPeriod : String(3) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Journal Entry Category'
  AccountingDocumentCategory : String(1) null;
  @sap.label : 'Journal Entry Category Name'
  AccountingDocumentCategoryName : String(60) null;
  @sap.display.format : 'Date'
  @sap.label : 'Posting Date'
  PostingDate : Date null;
  @sap.display.format : 'Date'
  @sap.label : 'Journal Entry Date'
  DocumentDate : Date null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Journal Entry Type'
  AccountingDocumentType : String(2) null;
  @sap.label : 'JE Type Name'
  @sap.quickinfo : 'Document Type Name'
  AccountingDocumentTypeName : String(20) null;
  @sap.display.format : 'Date'
  @sap.label : 'Net Due Date'
  @sap.quickinfo : 'Due Date for Net Payment'
  NetDueDate : Date null;
  @sap.display.format : 'Date'
  @sap.label : 'Cash Disc 1 Due Date'
  @sap.quickinfo : 'Due Date for Cash Discount 1'
  CashDiscount1DueDate : Date null;
  @sap.display.format : 'Date'
  @sap.label : 'Cash Disc 2 Due Date'
  @sap.quickinfo : 'Cash Discount 2 Due Date'
  CashDiscount2DueDate : Date null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Offsetting Account'
  OffsettingAccount : String(10) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Offset Acct Type'
  @sap.quickinfo : 'Offsetting Account Type'
  OffsettingAccountType : String(1) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Partner Fund'
  PartnerFund : String(10) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Partner Grant'
  PartnerGrant : String(20) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Budget Period'
  BudgetPeriod : String(10) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Par. Budget Per.'
  @sap.quickinfo : 'FM: Partner Budget Period'
  PartnerBudgetPeriod : String(10) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Branch Code'
  BranchCode : String(5) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Company Code Currency'
  @sap.semantics : 'currency-code'
  CompanyCodeCurrency : String(5) null;
  @sap.unit : 'CompanyCodeCurrency'
  @sap.label : 'Amount in Company Code Currency'
  AmountInCompanyCodeCurrency : Decimal(24, 3) null;
  @sap.unit : 'CompanyCodeCurrency'
  @sap.label : 'Tax Amount in Company Code Currency'
  @sap.quickinfo : 'Signed Tax Amount in Company Code Currency'
  TaxAmountInCoCodeCrcy : Decimal(24, 3) null;
  @sap.unit : 'CompanyCodeCurrency'
  @sap.label : 'TxBaseAmt CoCodeCrcy'
  @sap.quickinfo : 'Tax Base Amount in Company Code Currency'
  TaxBaseAmountInCoCodeCrcy : Decimal(24, 3) null;
  @sap.unit : 'CompanyCodeCurrency'
  @sap.label : 'Valuation Difference Amount In CC Crcy'
  @sap.quickinfo : 'Valuation Difference Amount In Company Code Currency'
  ValuationDiffAmtInCoCodeCrcy : Decimal(24, 3) null;
  @sap.unit : 'CompanyCodeCurrency'
  @sap.label : 'CashD Amt in CC Crcy'
  @sap.quickinfo : 'Cash Discount Amount in Company Code Currency'
  CashDiscountAmtInCoCodeCrcy : Decimal(24, 3) null;
  @sap.unit : 'CompanyCodeCurrency'
  @sap.label : 'Invc.Amt CoCode Crcy'
  @sap.quickinfo : 'Invoice Amount in Company Code Currency'
  InvoiceAmtInCoCodeCrcy : Decimal(24, 3) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Transaction Currency'
  @sap.semantics : 'currency-code'
  TransactionCurrency : String(5) null;
  @sap.unit : 'TransactionCurrency'
  @sap.label : 'Amount in Transaction Currency'
  AmountInTransactionCurrency : Decimal(24, 3) null;
  @sap.unit : 'TransactionCurrency'
  @sap.label : 'Origl Tax Base Amt'
  @sap.quickinfo : 'Original Tax Base Amount in Transaction Currency'
  OriginalTaxBaseAmount : Decimal(24, 3) null;
  @sap.unit : 'TransactionCurrency'
  @sap.label : 'Tax Amount'
  @sap.quickinfo : 'Tax Amount in Transaction Currency'
  TaxAmount : Decimal(24, 3) null;
  @sap.unit : 'TransactionCurrency'
  @sap.label : 'Tx Bse Amt TransCrcy'
  @sap.quickinfo : 'Tax Base Amount in Transaction Currency'
  TaxBaseAmountInTransCrcy : Decimal(24, 3) null;
  @sap.unit : 'TransactionCurrency'
  @sap.label : 'Withholding T.B. Amt'
  @sap.quickinfo : 'Withholding Tax Base Amount'
  WithholdingTaxBaseAmount : Decimal(24, 3) null;
  @sap.unit : 'TransactionCurrency'
  @sap.label : 'Plnd Amt Trans. Crcy'
  @sap.quickinfo : 'Planned Amount in Transaction Currency'
  PlannedAmtInTransactionCrcy : Decimal(24, 3) null;
  @sap.unit : 'TransactionCurrency'
  @sap.label : 'Cash Dscnt Base Amt'
  @sap.quickinfo : 'Cash Discount Base Amount'
  CashDiscountBaseAmount : Decimal(24, 3) null;
  @sap.unit : 'TransactionCurrency'
  @sap.label : 'Cash Discount Amount'
  CashDiscountAmount : Decimal(24, 3) null;
  @sap.unit : 'TransactionCurrency'
  @sap.label : 'Net Payment Amount'
  NetPaymentAmount : Decimal(24, 3) null;
  @sap.unit : 'TransactionCurrency'
  @sap.label : 'Withholding Tax Amt'
  @sap.quickinfo : 'Withholding Tax Amount'
  WithholdingTaxAmount : Decimal(24, 3) null;
  @sap.unit : 'TransactionCurrency'
  @sap.label : 'Withholding T-E Amt'
  @sap.quickinfo : 'Withholding Tax-Exemption Amount'
  WithholdingTaxExemptionAmt : Decimal(24, 3) null;
  @sap.unit : 'TransactionCurrency'
  @sap.label : 'Invc. Amt Frgn Crcy'
  @sap.quickinfo : 'Invoice Amount in Foreign Currency'
  InvoiceAmountInFrgnCurrency : Decimal(24, 3) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Balance Transaction Currency'
  @sap.semantics : 'currency-code'
  BalanceTransactionCurrency : String(5) null;
  @sap.unit : 'BalanceTransactionCurrency'
  @sap.label : 'Amount in Balance Transaction Currency'
  AmountInBalanceTransacCrcy : Decimal(24, 3) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Additional Crcy 1'
  @sap.quickinfo : 'Additional Currency 1'
  @sap.semantics : 'currency-code'
  AdditionalCurrency1 : String(5) null;
  @sap.unit : 'AdditionalCurrency1'
  @sap.label : 'Val. Diff. AddlCrcy1'
  @sap.quickinfo : 'Valuation Difference Amount in Additional Currency 1'
  ValuationDiffAmtInAddlCrcy1 : Decimal(24, 3) null;
  @sap.unit : 'AdditionalCurrency1'
  @sap.label : 'Amount in Additional Currency 1'
  AmountInAdditionalCurrency1 : Decimal(24, 3) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Additional Crcy 2'
  @sap.quickinfo : 'Additional Currency 2'
  @sap.semantics : 'currency-code'
  AdditionalCurrency2 : String(5) null;
  @sap.unit : 'AdditionalCurrency2'
  @sap.label : 'Amount in Additional Currency 2'
  AmountInAdditionalCurrency2 : Decimal(24, 3) null;
  @sap.unit : 'AdditionalCurrency2'
  @sap.label : 'Val. Diff. AddlCrcy2'
  @sap.quickinfo : 'Valuation Difference Amount in Additional Currency 2'
  ValuationDiffAmtInAddlCrcy2 : Decimal(24, 3) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Autom. Payt. Crcy.'
  @sap.quickinfo : 'Currency for Automatic Payment'
  @sap.semantics : 'currency-code'
  PaymentCurrency : String(5) null;
  @sap.unit : 'PaymentCurrency'
  @sap.label : 'Amount in Payment Currency'
  AmountInPaymentCurrency : Decimal(24, 3) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Credit Control Area Currency'
  @sap.semantics : 'currency-code'
  CreditControlAreaCurrency : String(5) null;
  @sap.unit : 'CreditControlAreaCurrency'
  @sap.label : 'Hedged Amount'
  @sap.quickinfo : 'Credit Management: Hedged Amount'
  HedgedAmount : Decimal(24, 3) null;
  @sap.label : 'Base Unit of Measure'
  @sap.semantics : 'unit-of-measure'
  BaseUnit : String(3) null;
  @sap.unit : 'BaseUnit'
  @sap.label : 'Quantity'
  Quantity : Decimal(23, 3) null;
  @sap.label : 'Unit of Entry'
  @sap.quickinfo : 'Unit of entry'
  @sap.semantics : 'unit-of-measure'
  GoodsMovementEntryUnit : String(3) null;
  @sap.unit : 'GoodsMovementEntryUnit'
  @sap.label : 'Entry Unit Quantity'
  @sap.quickinfo : 'Quantity in Entry Unit of Measure'
  QuantityInEntryUnit : Decimal(13, 3) null;
  @sap.label : 'Purchasing Document Price Unit'
  @sap.semantics : 'unit-of-measure'
  PurchasingDocumentPriceUnit : String(3) null;
  @sap.unit : 'PurchasingDocumentPriceUnit'
  @sap.label : 'Purchase Order Quantity'
  PurchaseOrderQty : Decimal(13, 3) null;
  @sap.unit : 'BaseUnit'
  @sap.label : 'Material Price Unit Quantity'
  MaterialPriceUnitQty : Decimal(5, 0) null;
  @sap.label : 'Number of Items'
  NumberOfItems : Decimal(12, 0) null;
  @sap.display.format : 'Date'
  @sap.label : 'Entered On'
  @sap.quickinfo : 'Accounting Document Entry Date'
  AccountingDocumentCreationDate : Date null;
  @sap.label : 'Creation Time'
  CreationTime : Time null;
  @sap.display.format : 'Date'
  @sap.label : 'Last Change Date'
  LastChangeDate : Date null;
  @sap.display.format : 'Date'
  @sap.label : 'Exchange Rate Date'
  ExchangeRateDate : Date null;
  @sap.label : 'Journal Entry Created By'
  @sap.quickinfo : 'User that created the journal entry'
  AccountingDocCreatedByUser : String(12) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Transaction Code'
  TransactionCode : String(20) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Intercompany Transac'
  @sap.quickinfo : 'Intercompany Transaction Number'
  IntercompanyTransaction : String(16) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Document Reference ID'
  DocumentReferenceID : String(16) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Recurring Journal Entry'
  RecurringAccountingDocument : String(10) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Reverse Document'
  ReverseDocument : String(10) null;
  @sap.display.format : 'NonNegative'
  @sap.label : 'Reverse Document Fiscal Year'
  ReverseDocumentFiscalYear : String(4) null;
  @sap.label : 'Document Header Text'
  AccountingDocumentHeaderText : String(25) null;
  @sap.label : 'Exchange Rate'
  ExchangeRate : Decimal(9, 5) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Bus. Trans. Category'
  @sap.quickinfo : 'Business Transaction Category'
  BusinessTransactionType : String(4) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Batch Input Session'
  BatchInputSession : String(12) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'FM Area'
  @sap.quickinfo : 'Financial Management Area'
  FinancialManagementArea : String(4) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Reversal Is Planned'
  @sap.quickinfo : 'Indicator: Reversal Is Planned for Document'
  ReversalIsPlanned : Boolean null;
  @sap.display.format : 'Date'
  @sap.label : 'Planned Reversal Dte'
  @sap.quickinfo : 'Planned Date for the Reversal Posting'
  PlannedReversalDate : Date null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax Is Automatically Calculated'
  TaxIsCalculatedAutomatically : Boolean null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax Base Amount is Net Amount'
  TaxBaseAmountIsNetAmount : Boolean null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Source company code'
  @sap.quickinfo : 'Source Company Code'
  SourceCompanyCode : String(4) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Logical System'
  LogicalSystem : String(10) null;
  @sap.label : 'Tax Exchange Rate'
  TaxExchangeRate : Decimal(9, 5) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Reversal Reason'
  @sap.quickinfo : 'Reason for Reversal or Inverse Posting'
  ReversalReason : String(2) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Branch'
  Branch : String(4) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Reference 1'
  @sap.quickinfo : 'Internal ID of Reference Key 1 in Document Header'
  Reference1InDocumentHeader : String(20) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Reference 2'
  @sap.quickinfo : 'Internal ID of Reference Key 2 in Document Header'
  Reference2InDocumentHeader : String(20) null;
  @sap.display.format : 'Date'
  @sap.label : 'Invoice Receipt date'
  @sap.quickinfo : 'Invoice Receipt Date'
  InvoiceReceiptDate : Date null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Ledger'
  Ledger : String(2) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Ledger Group'
  LedgerGroup : String(4) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Alternative Reference Document'
  AlternativeReferenceDocument : String(26) null;
  @sap.display.format : 'Date'
  @sap.label : 'Tax Reporting Date'
  TaxReportingDate : Date null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Acctg Document Class'
  @sap.quickinfo : 'Accounting Document Class'
  AccountingDocumentClass : String(6) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Exchange Rate Type'
  ExchangeRateType : String(4) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Late Payment Reason'
  LatePaymentReason : String(2) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Sales Document Condition'
  SalesDocumentCondition : String(10) null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Is Reversing'
  @sap.quickinfo : 'Indicator: Item is Reversing Another Item'
  IsReversal : Boolean null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Is Reversed'
  @sap.quickinfo : 'Indicator: Item is Reversed'
  IsReversed : Boolean null;
};

