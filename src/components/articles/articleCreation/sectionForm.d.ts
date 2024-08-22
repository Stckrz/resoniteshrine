import React, { SetStateAction } from 'react';
import { ArticleSectionModel, SectionImageModel } from '../../../models/articleModels';
interface SectionFormProps {
    section: ArticleSectionModel;
    sections: ArticleSectionModel[];
    setSections: React.Dispatch<SetStateAction<ArticleSectionModel[]>>;
    sectionImages: SectionImageModel[];
    setSectionImages: React.Dispatch<SetStateAction<SectionImageModel[]>>;
}
declare const SectionForm: React.FC<SectionFormProps>;
export default SectionForm;
