import React from 'react';
import { PageInformationModel } from '../../models/articleModels';
interface PaginationProps {
    pageInformation: PageInformationModel;
    page: number;
    pageType: string;
}
declare const Pagination: React.FC<PaginationProps>;
export default Pagination;
