import Document, { DocumentContext, DocumentInitialProps } from 'next/document'
import { resetServerContext } from 'react-beautiful-dnd'
 
class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    resetServerContext();
    return initialProps
  }
}
 
export default MyDocument;