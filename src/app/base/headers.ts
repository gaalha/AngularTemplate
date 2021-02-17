import {HttpHeaders} from '@angular/common/http';
import {BaseForm} from '~app/base/base-form';

export abstract class ProviderHeaders extends BaseForm {

  protected readonly CONTENT_TYPE = 'Content-Type';

  protected readonly FORM_URLENCODED = 'application/x-www-form-urlencoded';

  protected readonly SECRET_KEY = 'secret-key';

  protected constructor() {
    super();
  }

  protected headers = new HttpHeaders();

  protected privateHeaders = this.headers.append(this.SECRET_KEY, '$2b$10$uqbvBJkZ2DeDqmIHUPcihu6R2.RgurIWPs.hj0kLnivr6XHIh28mq');

  protected privatePostUrlencodedHeaders = this.privateHeaders.append(this.CONTENT_TYPE, this.FORM_URLENCODED);

  protected publicPostUrlencodedHeaders = this.headers.append(this.CONTENT_TYPE, this.FORM_URLENCODED);

}
