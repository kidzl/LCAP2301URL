using { AccountingDocument_Read } from './external/AccountingDocument_Read.cds';

using { URLTest as my } from '../db/schema';

@path : 'service/URLTest'
service URLTestService
{
    entity A_OperationalAcctgDocItemCube as
        projection on AccountingDocument_Read.A_OperationalAcctgDocItemCube;
}

annotate URLTestService with @requires :
[
    'authenticated-user'
];
