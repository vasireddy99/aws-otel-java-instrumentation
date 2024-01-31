/*
 * Copyright Amazon.com, Inc. or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

package software.amazon.opentelemetry.appsignals.test.utils;

/***
 * Constants for attributes defined in semantic conventions.
 */
public class SemanticConventionsConstants {

  // Semantic Conventions Attribute names
  public static final String SERVER_ADDRESS = "server.address";
  public static final String SERVER_PORT = "server.port";
  public static final String NET_PROTOCOL_VERSION = "network.protocol.version";
  public static final String NET_SOCK_HOST_ADDR = "net.sock.host.addr";
  public static final String NET_SOCK_HOST_PORT = "net.sock.host.port";
  public static final String NET_SOCK_PEER_ADDR = "network.peer.address";
  public static final String NET_SOCK_PEER_PORT = "network.peer.port";
  public static final String HTTP_RESPONSE_STATUS_CODE = "http.response.status_code";
  public static final String HTTP_SCHEME = "url.scheme";
  public static final String HTTP_TARGET = "url.path";
  public static final String HTTP_RESPONSE_CONTENT_LENGTH = "http.request.body.size";
  public static final String URL_FULL = "url.full";
  public static final String HTTP_REQUEST_METHOD = "http.request.method";
  public static final String HTTP_ROUTE = "http.route";

  public static final String PEER_SERVICE = "peer.service";

  public static final String THREAD_ID = "thread.id";
  public static final String THREAD_NAME = "thread.name";
  public static final String USER_AGENT_ORIGINAL = "user_agent.original";

  public static final String RPC_METHOD = "rpc.method";
  public static final String RPC_SERVICE = "rpc.service";

  public static final String DB_OPERATION = "db.operation";
  public static final String DB_SYSTEM = "db.system";

  // These are not official semantic attributes
  public static final String AWS_BUCKET_NAME = "aws.bucket.name";
  public static final String AWS_TABLE_NAME = "aws.table.name";
  public static final String AWS_QUEUE_URL = "aws.queue.url";
  public static final String AWS_QUEUE_NAME = "aws.queue.name";
  public static final String AWS_STREAM_NAME = "aws.stream.name";

  // kafka
  public static final String MESSAGING_CLIENT_ID = "messaging.client_id";
  public static final String MESSAGING_DESTINATION_NAME = "messaging.destination.name";
  public static final String MESSAGING_KAFKA_DESTINATION_PARTITION =
      "messaging.kafka.destination.partition";
  public static final String MESSAGING_KAFKA_MESSAGE_OFFSET = "messaging.kafka.message.offset";
  public static final String MESSAGING_SYSTEM = "messaging.system";
  public static final String MESSAGING_KAFKA_CONSUMER_GROUP = "messaging.kafka.consumer.group";
  public static final String MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES =
      "messaging.message.payload_size_bytes";
  public static final String MESSAGING_OPERATION = "messaging.operation";

  // GRPC specific semantic attributes
  public static final String RPC_GRPC_STATUS_CODE = "rpc.grpc.status_code";
  public static final String RPC_SYSTEM = "rpc.system";

  // JDBC
  public static final String DB_CONNECTION_STRING = "db.connection_string";
  public static final String DB_NAME = "db.name";
  public static final String DB_SQL_TABLE = "db.sql.table";
  public static final String DB_STATEMENT = "db.statement";
  public static final String DB_USER = "db.user";
}
