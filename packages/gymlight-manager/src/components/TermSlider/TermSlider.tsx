import { Pagination } from 'gymlight-design-system';
import { usePagination } from '@/hooks';

import * as Styled from './TermSlider.styles';

interface IContractTerm {
  id: number;
  title: string;
  content: string;
}
interface ITermSliderProps {
  term: IContractTerm[];
}

export const TermSlider = ({ term }: ITermSliderProps) => {
  const slides = term.map((item) => {
    const { id, title, content } = item;
    return (
      <Styled.Article key={id}>
        <p className="article-title">{title}</p>
        {content.split('\n').map((paragraph) => (
          <Styled.Paragraph>{paragraph}</Styled.Paragraph>
        ))}
      </Styled.Article>
    );
  });

  const numberOfSliders = slides.length;

  const { currentPageNumber, handlePageNumberChange, pageSize } = usePagination(numberOfSliders);

  return (
    <>
      <Styled.EnrollSlider key={currentPageNumber} index={currentPageNumber}>
        {slides[currentPageNumber - 1]}
      </Styled.EnrollSlider>
      <Pagination
        className="pagination"
        currentPage={currentPageNumber}
        totalPages={pageSize}
        onPageChange={handlePageNumberChange}
      />
    </>
  );
};

export default TermSlider;
